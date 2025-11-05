import { motion } from 'framer-motion';

interface GridBackgroundProps {
  gridSize?: number;
  lineColor?: string;
  glowColor?: string;
  opacity?: number;
  animated?: boolean;
}

export default function GridBackground({
  gridSize = 50,
  lineColor = 'rgba(121, 64, 190, 0.2)',
  glowColor = 'rgba(0, 212, 255, 0.3)',
  opacity = 0.4,
  animated = true,
}: GridBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {/* Vertical lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for lines */}
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Generate grid lines */}
        {Array.from({ length: Math.ceil(window.innerWidth / gridSize) + 1 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * gridSize}
            y1="0"
            x2={i * gridSize}
            y2="100%"
            stroke="url(#gridGradient)"
            strokeWidth="1"
          />
        ))}

        {Array.from({ length: Math.ceil(window.innerHeight / gridSize) + 1 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * gridSize}
            x2="100%"
            y2={i * gridSize}
            stroke="url(#gridGradient)"
            strokeWidth="1"
          />
        ))}

        {/* Animated glowing dots at intersections */}
        {animated &&
          Array.from({ length: 20 }).map((_, i) => {
            const x = (Math.random() * window.innerWidth) / gridSize;
            const y = (Math.random() * window.innerHeight) / gridSize;
            return (
              <motion.circle
                key={`dot-${i}`}
                cx={Math.floor(x) * gridSize}
                cy={Math.floor(y) * gridSize}
                r="3"
                fill={glowColor}
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            );
          })}
      </svg>

      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(1, 4, 19, 0.8) 100%)',
        }}
      />
    </div>
  );
}
