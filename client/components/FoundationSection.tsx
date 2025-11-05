import {
  Sparkles,
  Award,
  Heart,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { AnimatedCard } from "./animations/AnimatedCard";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export default function FoundationSection() {
  const { t } = useLanguage();

  const values = [
    { icon: Sparkles, key: "foundation.value1" },
    { icon: Award, key: "foundation.value2" },
    { icon: Heart, key: "foundation.value3" },
    { icon: Users, key: "foundation.value4" },
    { icon: TrendingUp, key: "foundation.value5" },
    { icon: Target, key: "foundation.value6" },
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 max-w-[1308px] mx-auto">
      {/* Blur effect */}
      <div className="absolute right-[-100px] top-0 blur-gradient-purple pointer-events-none" />

      <div className="relative z-10 space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <FadeIn direction="left" duration={0.8}>
            <h2 className="text-3xl md:text-[44px] font-medium font-commissioner uppercase text-[#FBFBFB] leading-tight">
              {t("foundation.title")}
            </h2>
          </FadeIn>
          <FadeIn direction="right" duration={0.8} delay={0.2}>
            <p className="text-base font-medium font-commissioner text-[#CCC]">
              {t("foundation.subtitle")}
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vision Card */}
          <AnimatedCard
            delay={0}
            hoverScale={1.03}
            glowColor="rgba(121, 64, 190, 0.4)"
            className="flex flex-col items-center gap-8 p-8 rounded-2xl border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522] transition-all"
          >
            <div className="w-full space-y-8">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-start"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b28b0fc57117743c9aac9f7afb6b7eb296c960b1?width=112"
                  alt=""
                  className="w-14 h-auto"
                />
              </motion.div>
              <div className="space-y-3.5">
                <h3 className="text-xl font-medium font-commissioner text-[#FBFBFB]">
                  {t("foundation.vision.title")}
                </h3>
                <p className="text-sm font-normal font-commissioner text-[#CCC] leading-[19.6px]">
                  {t("foundation.vision.description")}
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Mission Card */}
          <AnimatedCard
            delay={0.1}
            hoverScale={1.03}
            glowColor="rgba(121, 64, 190, 0.4)"
            className="flex flex-col items-center gap-8 p-8 rounded-2xl border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522] transition-all"
          >
            <div className="w-full space-y-8">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-start"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c5a34c9be2a22bc4b31ee2540d9415db0c9ced40?width=112"
                  alt=""
                  className="w-14 h-auto"
                />
              </motion.div>
              <div className="space-y-3.5">
                <h3 className="text-xl font-medium font-commissioner text-[#FBFBFB]">
                  {t("foundation.mission.title")}
                </h3>
                <p className="text-sm font-normal font-commissioner text-[#CCC] leading-[19.6px]">
                  {t("foundation.mission.description")}
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Values Card */}
          <AnimatedCard
            delay={0.2}
            hoverScale={1.03}
            glowColor="rgba(121, 64, 190, 0.4)"
            className="flex flex-col items-center gap-8 p-8 rounded-2xl border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522] transition-all"
          >
            <div className="w-full space-y-8">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-start"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c5a34c9be2a22bc4b31ee2540d9415db0c9ced40?width=112"
                  alt=""
                  className="w-14 h-auto"
                />
              </motion.div>
              <div className="space-y-3.5">
                <h3 className="text-xl font-medium font-commissioner text-[#FBFBFB]">
                  {t("foundation.values.title")}
                </h3>
                <StaggerContainer staggerDelay={0.05} className="space-y-1">
                  {values.map((value, idx) => (
                    <StaggerItem key={idx}>
                      <motion.div
                        whileHover={{ x: 5, scale: 1.05 }}
                        className="flex items-center gap-3 transition-all"
                      >
                        <value.icon
                          className="w-5 h-5 text-[rgba(171,109,247,0.40)]"
                          strokeWidth={1.67}
                        />
                        <span className="text-sm font-medium font-inter text-[rgba(250,250,250,0.90)]">
                          {t(value.key)}
                        </span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
