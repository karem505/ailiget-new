import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import AnimatedStats from "./AnimatedStats";
import GridBackground from "./animations/GridBackground";

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#010413] to-[#0F1522] overflow-hidden">
      {/* Grid background - reduced opacity */}
      <GridBackground gridSize={60} opacity={0.15} />

      {/* Top glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-cyan/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16 relative">
          {/* Backdrop glow for better text visibility */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-violet/10 rounded-full blur-[80px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-commissioner uppercase mb-4 bg-gradient-to-r from-white via-cyan to-violet bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              {t("stats.title") || "Proven Business Impact"}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {t("stats.subtitle") || "Our AI-powered solutions deliver measurable results that transform businesses"}
            </p>
          </motion.div>
        </div>

        <AnimatedStats />
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet/20 rounded-full blur-[100px]" />
    </section>
  );
}
