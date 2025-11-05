import { LayoutGrid, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { ScaleIn } from "./animations/ScaleIn";
import { AnimatedCard } from "./animations/AnimatedCard";
import NeuralNetwork from "./animations/NeuralNetwork";

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Neural network background */}
      <NeuralNetwork nodeCount={30} connectionDistance={100} opacity={0.2} speed={0.25} />

      {/* Blur effect */}
      <div className="absolute left-[-100px] top-0 blur-gradient-purple pointer-events-none" />

      <div className="relative z-10 max-w-[1310px] mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <FadeIn direction="left" duration={0.8}>
            <h2 className="text-3xl md:text-[44px] font-medium font-commissioner uppercase text-[#FBFBFB]">
              {t("services.title")}
            </h2>
          </FadeIn>
          <FadeIn direction="right" duration={0.8} delay={0.2}>
            <p className="text-base font-medium font-commissioner text-[#CCC]">
              {t("services.subtitle")}
            </p>
          </FadeIn>
        </div>

        {/* Featured Products */}
        <div className="space-y-8">
          <ScaleIn delay={0.2}>
            <h3 className="text-2xl md:text-[30px] font-bold font-poppins text-center text-[#FCFBF8]">
              {t("services.featured")}
            </h3>
          </ScaleIn>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1024px] mx-auto">
            {/* Animated connection line between cards */}
            <motion.div
              className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-1 pointer-events-none"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 10">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="50%" stopColor="#7940BE" />
                    <stop offset="100%" stopColor="#14B06C" />
                  </linearGradient>
                </defs>
                <motion.line
                  x1="0"
                  y1="5"
                  x2="100"
                  y2="5"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  animate={{
                    strokeDashoffset: [0, -8],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Animated dots */}
                <motion.circle
                  r="3"
                  fill="#00D4FF"
                  animate={{
                    cx: [0, 100],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  cy="5"
                />
              </svg>
            </motion.div>

            {/* Tornix Card */}
            <AnimatedCard
              delay={0.3}
              hoverScale={1.02}
              glowColor="rgba(0, 212, 255, 0.3)"
              className="relative p-6 rounded-xl border border-[rgba(121,64,190,0.50)] bg-gradient-to-br from-[rgba(27,34,50,0.70)] to-[rgba(14,21,37,0.60)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-0.5 rounded-full border border-[rgba(171,109,247,0.40)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#4F378A]"
                  >
                    {t("services.product.badge")}
                  </motion.span>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    className="p-3 rounded-xl bg-gradient-icon shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)]"
                  >
                    <LayoutGrid className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e493a03f79314c81e8dc8284763f092d69f3fd3b?width=128"
                  alt="Tornix logo"
                  className="w-16 h-16"
                />

                <h4 className="text-2xl font-semibold font-poppins text-[#FCFBF8] tracking-tight">
                  {t("services.tornix.name")}
                </h4>

                <p className="text-base font-normal font-inter text-[rgba(250,250,250,0.90)] leading-[26px]">
                  {t("services.tornix.description")}
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    t("services.tornix.tag1"),
                    t("services.tornix.tag2"),
                    t("services.tornix.tag3"),
                  ].map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-0.5 rounded-full border border-[rgba(171,109,247,0.40)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#6750A4]"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            {/* PMO Builder Card */}
            <AnimatedCard
              delay={0.4}
              hoverScale={1.02}
              glowColor="rgba(121, 64, 190, 0.4)"
              className="relative p-6 rounded-xl border border-[rgba(121,64,190,0.50)] bg-gradient-to-br from-[rgba(27,34,50,0.70)] to-[rgba(14,21,37,0.60)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-0.5 rounded-full border border-[rgba(121,64,190,0.50)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#7940BE]"
                  >
                    {t("services.product.badge")}
                  </motion.span>
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    className="p-3 rounded-xl bg-gradient-icon shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)]"
                  >
                    <BarChart3 className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <motion.img
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e8e387c20b6ba7f4adb7d5ddee122189a9943b49?width=120"
                  alt="PMO Builder logo"
                  className="w-[60px] h-16"
                />

                <h4 className="text-2xl font-semibold font-poppins text-[#FCFBF8] tracking-tight">
                  {t("services.pmo.name")}
                </h4>

                <p className="text-base font-normal font-inter text-[rgba(250,250,250,0.90)] leading-[26px]">
                  {t("services.pmo.description")}
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    t("services.pmo.tag1"),
                    t("services.pmo.tag2"),
                    t("services.pmo.tag3"),
                  ].map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-0.5 rounded-full border border-[rgba(121,64,190,0.50)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#7940BE]"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
