import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { ScaleIn } from "./animations/ScaleIn";
import { FloatingElement } from "./animations/FloatingElement";
import NeuralNetwork from "./animations/NeuralNetwork";
import DataParticles from "./animations/DataParticles";
import AIBrain from "./animations/AIBrain";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[504px] bg-gradient-to-br from-[#131119] via-[#41227C] to-[#4772A7] overflow-hidden">
      {/* AI-themed background layers */}
      <NeuralNetwork nodeCount={40} connectionDistance={120} opacity={0.25} speed={0.3} />
      <DataParticles particleCount={25} speed={0.2} />

      {/* AI Brain visualization - positioned on the right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-[-50px] sm:right-0 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <AIBrain size={400} />
      </motion.div>

      {/* Decorative 3D objects with floating animation */}
      <FloatingElement duration={4} yOffset={15}>
        <motion.img
          initial={{ opacity: 0, x: -100, rotate: -28.194 }}
          animate={{ opacity: 0.6, x: 0, rotate: -28.194 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="https://api.builder.io/api/v1/image/assets/TEMP/299c44f9aa48255f1f96ce36485367b83a82258f?width=712"
          alt=""
          className="absolute left-[-80px] sm:left-[-55px] top-[49px] w-[200px] sm:w-[280px] md:w-[356px] h-[164px] sm:h-[230px] md:h-[292px] opacity-40 sm:opacity-60"
        />
      </FloatingElement>
      <FloatingElement duration={5} yOffset={20} delay={0.5}>
        <motion.img
          initial={{ opacity: 0, x: 100, rotate: 0 }}
          animate={{ opacity: 0.6, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          src="https://api.builder.io/api/v1/image/assets/TEMP/14e5c9175eeea6e7ac9bde566303a9b10e9a1278?width=842"
          alt=""
          className="absolute right-[-50px] sm:right-0 top-[100px] sm:top-[150px] w-[250px] sm:w-[320px] md:w-[421px] h-[205px] sm:h-[262px] md:h-[345px] opacity-40 sm:opacity-60 hidden sm:block lg:hidden"
        />
      </FloatingElement>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 text-center max-w-[1082px] mx-auto">
        <div className="space-y-3 sm:space-y-4">
          <FadeIn delay={0.2} duration={0.8} direction="down">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] font-bold font-commissioner uppercase text-[#FBFBFB] leading-tight tracking-tight px-2">
              {t("hero.title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.4} duration={0.8} direction="up">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-commissioner text-[#CCC] max-w-full sm:max-w-[90%] md:max-w-[863px] mx-auto px-2 leading-relaxed">
              <span className="font-semibold">{t("hero.subtitle.part1")}</span>
              {t("hero.subtitle.part2")}
            </p>
          </FadeIn>
        </div>

        <ScaleIn delay={0.6} duration={0.6}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full border border-[rgba(255,255,255,0.40)] bg-gradient-to-r from-[#7940BE] via-[#9952E0] via-[#5994B7] to-[#14B06C] shadow-lg text-white font-bold text-sm sm:text-base md:text-lg hover:shadow-xl transition-all"
          >
            {t("hero.cta")}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#7940BE]" />
            </motion.div>
          </motion.button>
        </ScaleIn>
      </div>
    </section>
  );
}
