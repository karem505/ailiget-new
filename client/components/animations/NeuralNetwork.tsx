import { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface NeuralNetworkProps {
  nodeCount?: number;
  connectionDistance?: number;
  nodeColor?: string;
  lineColor?: string;
  opacity?: number;
  speed?: number;
}

export default function NeuralNetwork({
  nodeCount = 25, // Reduced from 50 for better performance
  connectionDistance = 120, // Reduced from 150 to minimize O(n²) impact
  nodeColor = '#7940BE',
  lineColor = '#00D4FF',
  opacity = 0.3,
  speed = 0.5,
}: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
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

    // Initialize nodes
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));

    // Spatial grid optimization for O(n) neighbor search
    const gridSize = connectionDistance;
    const getGridKey = (x: number, y: number) => {
      const gridX = Math.floor(x / gridSize);
      const gridY = Math.floor(y / gridSize);
      return `${gridX},${gridY}`;
    };

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx || !isVisible || prefersReducedMotion) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Build spatial grid
      const grid = new Map<string, Node[]>();
      nodesRef.current.forEach((node) => {
        const key = getGridKey(node.x, node.y);
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key)!.push(node);
      });

      // Update and draw nodes
      nodesRef.current.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = opacity;
        ctx.fill();
      });

      // Draw connections using spatial grid (optimized from O(n²) to ~O(n))
      const drawnPairs = new Set<string>();
      nodesRef.current.forEach((nodeA) => {
        const gridX = Math.floor(nodeA.x / gridSize);
        const gridY = Math.floor(nodeA.y / gridSize);

        // Check neighboring grid cells
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const key = `${gridX + dx},${gridY + dy}`;
            const neighbors = grid.get(key);
            if (!neighbors) continue;

            neighbors.forEach((nodeB) => {
              if (nodeA === nodeB) return;

              // Avoid drawing duplicate connections
              const pairKey = nodeA < nodeB ? `${nodeA}-${nodeB}` : `${nodeB}-${nodeA}`;
              if (drawnPairs.has(pairKey)) return;

              const dx = nodeA.x - nodeB.x;
              const dy = nodeA.y - nodeB.y;
              const distSq = dx * dx + dy * dy;
              const connDistSq = connectionDistance * connectionDistance;

              if (distSq < connDistSq) {
                const distance = Math.sqrt(distSq);
                ctx.beginPath();
                ctx.moveTo(nodeA.x, nodeA.y);
                ctx.lineTo(nodeB.x, nodeB.y);
                ctx.strokeStyle = lineColor;
                ctx.globalAlpha = opacity * (1 - distance / connectionDistance);
                ctx.lineWidth = 1;
                ctx.stroke();
                drawnPairs.add(pairKey);
              }
            });
          }
        }
      });

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
  }, [nodeCount, connectionDistance, nodeColor, lineColor, opacity, speed, isVisible, prefersReducedMotion]);

  // Don't render canvas if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
