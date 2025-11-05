import { motion } from 'framer-motion';

interface AIBrainProps {
  size?: number;
  className?: string;
}

export default function AIBrain({ size = 300, className = '' }: AIBrainProps) {
  // Define brain nodes with positions (simplified brain structure)
  const nodes = [
    // Central nodes
    { x: 150, y: 100, size: 8, delay: 0 },
    { x: 150, y: 150, size: 10, delay: 0.1 },
    { x: 150, y: 200, size: 8, delay: 0.2 },

    // Left hemisphere
    { x: 100, y: 80, size: 6, delay: 0.3 },
    { x: 100, y: 120, size: 7, delay: 0.4 },
    { x: 100, y: 160, size: 6, delay: 0.5 },
    { x: 100, y: 200, size: 7, delay: 0.6 },
    { x: 100, y: 240, size: 6, delay: 0.7 },

    { x: 60, y: 100, size: 5, delay: 0.8 },
    { x: 60, y: 150, size: 6, delay: 0.9 },
    { x: 60, y: 200, size: 5, delay: 1.0 },

    // Right hemisphere
    { x: 200, y: 80, size: 6, delay: 0.3 },
    { x: 200, y: 120, size: 7, delay: 0.4 },
    { x: 200, y: 160, size: 6, delay: 0.5 },
    { x: 200, y: 200, size: 7, delay: 0.6 },
    { x: 200, y: 240, size: 6, delay: 0.7 },

    { x: 240, y: 100, size: 5, delay: 0.8 },
    { x: 240, y: 150, size: 6, delay: 0.9 },
    { x: 240, y: 200, size: 5, delay: 1.0 },
  ];

  // Define connections between nodes
  const connections = [
    // Central connections
    [0, 1], [1, 2],

    // Left hemisphere connections
    [0, 3], [1, 4], [2, 5], [4, 6], [5, 7],
    [3, 8], [4, 9], [5, 10],
    [8, 9], [9, 10],

    // Right hemisphere connections
    [0, 11], [1, 12], [2, 13], [12, 14], [13, 15],
    [11, 16], [12, 17], [13, 18],
    [16, 17], [17, 18],

    // Cross-hemisphere connections
    [3, 11], [4, 12], [5, 13], [6, 14],
  ];

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 300 300"
        className="absolute inset-0"
      >
        <defs>
          {/* Gradient for connections */}
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7940BE" />
            <stop offset="50%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#14B06C" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="brainGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Render connections */}
        {connections.map(([from, to], index) => (
          <motion.line
            key={`connection-${index}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
            opacity="0.4"
            filter="url(#brainGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 1.5,
              delay: index * 0.05,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Animated data flow along connections */}
        {connections.slice(0, 10).map(([from, to], index) => (
          <motion.circle
            key={`pulse-${index}`}
            r="2"
            fill="#00D4FF"
            filter="url(#brainGlow)"
            initial={{
              cx: nodes[from].x,
              cy: nodes[from].y,
              opacity: 0,
            }}
            animate={{
              cx: [nodes[from].x, nodes[to].x, nodes[from].x],
              cy: [nodes[from].y, nodes[to].y, nodes[from].y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Render nodes */}
        {nodes.map((node, index) => (
          <motion.g key={`node-${index}`}>
            {/* Outer glow ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size * 2}
              fill="none"
              stroke="#00D4FF"
              strokeWidth="1"
              opacity="0.3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{
                duration: 2,
                delay: node.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Main node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="url(#connectionGradient)"
              filter="url(#brainGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: node.delay,
                ease: 'easeOut',
              }}
            />
          </motion.g>
        ))}
      </svg>

      {/* Center glow effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(121, 64, 190, 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
