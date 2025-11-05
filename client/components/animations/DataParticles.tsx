import { useEffect, useRef } from 'react';

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
  particleCount = 30,
  colors = ['#7940BE', '#00D4FF', '#5994B7', '#14B06C'],
  speed = 0.3,
  symbols = ['0', '1', '{', '}', '<', '>', '/', '*', '+', '-', '='],
}: DataParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

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
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

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

        // Draw particle symbol
        ctx.font = `${particle.size}px 'Courier New', monospace`;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fillText(particle.symbol, particle.x, particle.y);

        // Add slight glow effect
        ctx.shadowBlur = 5;
        ctx.shadowColor = particle.color;
        ctx.fillText(particle.symbol, particle.x, particle.y);
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, colors, speed, symbols]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}
