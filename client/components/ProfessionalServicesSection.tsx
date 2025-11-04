import {
  Lightbulb,
  Rocket,
  Link as LinkIcon,
  Zap,
  Brain,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-[1283px] mx-auto space-y-8">
        <h2 className="text-2xl md:text-[30px] font-bold font-poppins text-center text-[#FCFBF8]">
          {t("professional.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border-2 border-[rgba(121,64,190,0.50)] bg-gradient-to-br from-[rgba(27,34,50,0.70)] to-[rgba(14,21,37,0.60)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]"
            >
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-icon shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)]">
                    <service.icon
                      className="w-10 h-10 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold font-poppins text-center text-[#FCFBF8] leading-7 tracking-tight">
                  {t(service.titleKey)}
                </h3>

                <p className="text-sm font-normal font-inter text-center text-[#A7AFBE] leading-[22.75px]">
                  {t(service.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
