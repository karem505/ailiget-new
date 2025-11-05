import { useEffect, useRef } from 'react';

interface CircuitBoardProps {
  density?: number;
  color?: string;
  glowColor?: string;
  opacity?: number;
  animated?: boolean;
}

export default function CircuitBoard({
  density = 30,
  color = '#7940BE',
  glowColor = '#00D4FF',
  opacity = 0.15,
  animated = true,
}: CircuitBoardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const timeRef = useRef(0);

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

    // Generate circuit pattern
    const drawCircuit = (time: number) => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = opacity;

      const spacing = Math.max(canvas.width, canvas.height) / density;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          // Draw horizontal lines
          if (Math.random() > 0.5) {
            const length = spacing * (0.5 + Math.random() * 1.5);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + length, y);

            // Add glow effect for animated circuits
            if (animated && Math.sin(time * 0.001 + x + y) > 0.7) {
              ctx.strokeStyle = glowColor;
              ctx.lineWidth = 2;
              ctx.shadowBlur = 10;
              ctx.shadowColor = glowColor;
            } else {
              ctx.strokeStyle = color;
              ctx.lineWidth = 1;
              ctx.shadowBlur = 0;
            }
            ctx.stroke();
          }

          // Draw vertical lines
          if (Math.random() > 0.5) {
            const length = spacing * (0.5 + Math.random() * 1.5);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + length);

            if (animated && Math.sin(time * 0.001 + x - y) > 0.7) {
              ctx.strokeStyle = glowColor;
              ctx.lineWidth = 2;
              ctx.shadowBlur = 10;
              ctx.shadowColor = glowColor;
            } else {
              ctx.strokeStyle = color;
              ctx.lineWidth = 1;
              ctx.shadowBlur = 0;
            }
            ctx.stroke();
          }

          // Draw nodes (connection points)
          if (Math.random() > 0.7) {
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);

            if (animated && Math.sin(time * 0.002 + x * 0.01 + y * 0.01) > 0.5) {
              ctx.fillStyle = glowColor;
              ctx.shadowBlur = 8;
              ctx.shadowColor = glowColor;
            } else {
              ctx.fillStyle = color;
              ctx.shadowBlur = 0;
            }
            ctx.fill();
          }
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    // Animation loop
    const animate = () => {
      timeRef.current += 16;
      drawCircuit(timeRef.current);

      if (animated) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (animated) {
      animate();
    } else {
      drawCircuit(0);
    }

    return () => {
      window.removeEventListener('resize', updateSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [density, color, glowColor, opacity, animated]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
