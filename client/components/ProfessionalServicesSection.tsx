import {
  Lightbulb,
  Rocket,
  Link as LinkIcon,
  Zap,
  Brain,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ScaleIn } from "./animations/ScaleIn";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";
import CircuitBoard from "./animations/CircuitBoard";

export default function ProfessionalServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Lightbulb,
      titleKey: "professional.service1.title",
      descriptionKey: "professional.service1.description",
    },
    {
      icon: Rocket,
      titleKey: "professional.service2.title",
      descriptionKey: "professional.service2.description",
    },
    {
      icon: LinkIcon,
      titleKey: "professional.service3.title",
      descriptionKey: "professional.service3.description",
    },
    {
      icon: Zap,
      titleKey: "professional.service4.title",
      descriptionKey: "professional.service4.description",
    },
    {
      icon: Brain,
      titleKey: "professional.service5.title",
      descriptionKey: "professional.service5.description",
    },
    {
      icon: MessageSquare,
      titleKey: "professional.service6.title",
      descriptionKey: "professional.service6.description",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-[#0F1522] to-[#010413]">
      {/* Circuit board background */}
      <CircuitBoard density={25} opacity={0.12} animated={true} />

      <div className="relative z-10 max-w-[1283px] mx-auto space-y-8">
        <ScaleIn delay={0.2}>
          <h2 className="text-2xl md:text-[30px] font-bold font-poppins text-center text-[#FCFBF8]">
            {t("professional.title")}
          </h2>
        </ScaleIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="relative h-full p-6 rounded-xl border-2 border-[rgba(121,64,190,0.50)] bg-gradient-to-br from-[rgba(27,34,50,0.70)] to-[rgba(14,21,37,0.60)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)] overflow-hidden group"
              >
                {/* Holographic shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(110deg, transparent 30%, rgba(0, 212, 255, 0.2) 50%, transparent 70%)',
                  }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-icon shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)]"
                    >
                      <service.icon
                        className="w-10 h-10 text-white"
                        strokeWidth={2.5}
                      />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-semibold font-poppins text-center text-[#FCFBF8] leading-7 tracking-tight">
                    {t(service.titleKey)}
                  </h3>

                  <p className="text-sm font-normal font-inter text-center text-[#A7AFBE] leading-[22.75px]">
                    {t(service.descriptionKey)}
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
