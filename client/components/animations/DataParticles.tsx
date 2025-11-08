import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  symbol: string;
}

interface DataParticlesProps {
  particleCount?: number;
  colors?: string[];
  speed?: number;
  symbols?: string[];
}

export default function DataParticles({
  particleCount = 15, // Reduced from 30 for better performance
  colors = ['#7940BE', '#00D4FF', '#5994B7', '#14B06C'],
  speed = 0.3,
  symbols = ['0', '1', '{', '}', '<', '>', '/', '*', '+', '-', '='],
}: DataParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Intersection Observer to pause animation when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Start animating when 10% visible
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };
    updateSize();

    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(updateSize, 150);
    };
    window.addEventListener('resize', handleResize);

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed + speed, // Slight upward drift
      size: 10 + Math.random() * 8,
      opacity: 0.3 + Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
    }));

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx || !isVisible || prefersReducedMotion) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set text rendering properties once (moved out of loop)
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.y -= particle.vy;
        particle.x += particle.vx;

        // Reset particle when it goes off screen
        if (particle.y < -20) {
          particle.y = canvas.height + 20;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < -20 || particle.x > canvas.width + 20) {
          particle.x = Math.random() * canvas.width;
        }

        // Draw particle symbol with glow (optimized single pass)
        ctx.font = `${particle.size}px 'Courier New', monospace`;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;

        // Use shadow for glow effect (only set once per particle)
        ctx.shadowBlur = 3; // Reduced from 5 for better performance
        ctx.shadowColor = particle.color;
        ctx.fillText(particle.symbol, particle.x, particle.y);
      });

      // Reset shadow and alpha
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, colors, speed, symbols, isVisible, prefersReducedMotion]);

  // Don't render canvas if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}
