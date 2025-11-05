import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hoverScale?: number;
  glowColor?: string;
}

export const AnimatedCard = ({
  children,
  delay = 0,
  className = "",
  hoverScale = 1.05,
  glowColor = "rgba(0, 212, 255, 0.3)",
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{
        scale: hoverScale,
        boxShadow: `0 20px 40px ${glowColor}`,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
