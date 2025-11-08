import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";
import { ScaleIn } from "./animations/ScaleIn";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

export default function ContactFormSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-24 px-3 sm:px-4">
      <div className="max-w-[1312px] mx-auto">
        <ScaleIn delay={0.2}>
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl border-2 border-[rgba(121,64,190,0.50)] bg-gradient-to-br from-[rgba(27,34,50,0.70)] to-[rgba(14,21,37,0.60)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]">
            <div className="space-y-6 sm:space-y-8">
              {/* Header */}
              <div className="text-center space-y-3 sm:space-y-4">
                <FadeIn direction="down" duration={0.8}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-[#FCFBF8] px-2">
                    {t("contact.title")}
                  </h2>
                </FadeIn>
                <FadeIn direction="up" duration={0.8} delay={0.2}>
                  <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-[#A7AFBE] max-w-[768px] mx-auto px-2">
                    {t("contact.subtitle")}
                  </p>
                </FadeIn>
              </div>

              {/* Form */}
              <StaggerContainer staggerDelay={0.1}>
                <form className="max-w-[672px] mx-auto space-y-4 sm:space-y-6">
                  <StaggerItem>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label className="text-xs sm:text-sm font-medium font-inter text-[#FCFBF8]">
                          {t("contact.firstName")} {t("contact.required")}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all"
                          placeholder={t("contact.firstName.placeholder")}
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label className="text-xs sm:text-sm font-medium font-inter text-[#FCFBF8]">
                          {t("contact.lastName")} {t("contact.required")}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all"
                          placeholder={t("contact.lastName.placeholder")}
                        />
                      </motion.div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label className="text-xs sm:text-sm font-medium font-inter text-[#FCFBF8]">
                        {t("contact.email")} {t("contact.required")}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all"
                        placeholder={t("contact.email.placeholder")}
                      />
                    </motion.div>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label className="text-xs sm:text-sm font-medium font-inter text-[#FCFBF8]">
                        {t("contact.phone")}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all"
                        placeholder={t("contact.phone.placeholder")}
                      />
                    </motion.div>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label className="text-xs sm:text-sm font-medium font-inter text-[#FCFBF8]">
                        {t("contact.company")}
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all"
                        placeholder={t("contact.company.placeholder")}
                      />
                    </motion.div>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label className="text-xs sm:text-sm font-medium font-inter text-[#FCFBF8]">
                        {t("contact.message")} {t("contact.required")}
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] resize-none transition-all"
                        placeholder={t("contact.message.placeholder")}
                      />
                    </motion.div>
                  </StaggerItem>

                  <StaggerItem>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-gradient-to-r from-[#7940BE] via-[#9952E0] via-[#5994B7] to-[#14B06C] font-bold font-inter text-white shadow-lg hover:shadow-xl transition-shadow"
                    >
                      {t("contact.submit")}
                    </motion.button>
                  </StaggerItem>
                </form>
              </StaggerContainer>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
