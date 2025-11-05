import { BarChart3, Target, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export default function TransformSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: BarChart3,
      titleKey: "transform.feature1.title",
      descriptionKey: "transform.feature1.description",
    },
    {
      icon: Target,
      titleKey: "transform.feature2.title",
      descriptionKey: "transform.feature2.description",
    },
    {
      icon: Handshake,
      titleKey: "transform.feature3.title",
      descriptionKey: "transform.feature3.description",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-[1088px] mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <FadeIn direction="down" duration={0.8}>
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-[#FCFBF8] leading-tight">
              {t("transform.title")}
            </h2>
          </FadeIn>
          <FadeIn direction="up" duration={0.8} delay={0.2}>
            <p className="text-lg font-normal font-inter text-[#A7AFBE] max-w-[768px] mx-auto">
              {t("transform.subtitle")}
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-xl border border-[rgba(103,80,164,0.16)] bg-gradient-to-br from-[rgba(27,34,50,0.70)] to-[rgba(14,21,37,0.60)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]"
              >
                <div className="flex flex-col items-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-icon shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)]"
                  >
                    <feature.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2.5}
                    />
                  </motion.div>

                  <h3 className="text-xl font-semibold font-poppins text-center text-[#FCFBF8] tracking-tight">
                    {t(feature.titleKey)}
                  </h3>

                  <p className="text-sm font-normal font-inter text-center text-[rgba(250,250,250,0.80)]">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
