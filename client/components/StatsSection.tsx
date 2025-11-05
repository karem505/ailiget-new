import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedStats from "./AnimatedStats";
import GridBackground from "./animations/GridBackground";

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#010413] to-[#0F1522] overflow-hidden">
      {/* Grid background */}
      <GridBackground gridSize={60} opacity={0.3} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-commissioner uppercase text-white mb-4">
            {t("stats.title") || "Proven Business Impact"}
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            {t("stats.subtitle") || "Our AI-powered solutions deliver measurable results that transform businesses"}
          </p>
        </div>

        <AnimatedStats />
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet/20 rounded-full blur-[100px]" />
    </section>
  );
}
