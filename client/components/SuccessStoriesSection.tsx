import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SuccessStoriesSection() {
  const { t } = useLanguage();

  const tornixPoints = [
    t("success.tornix.point1"),
    t("success.tornix.point2"),
    t("success.tornix.point3"),
    t("success.tornix.point4"),
    t("success.tornix.point5"),
  ];

  const pePoints = [
    t("success.pe.point1"),
    t("success.pe.point2"),
    t("success.pe.point3"),
    t("success.pe.point4"),
    t("success.pe.point5"),
  ];

  return (
    <section className="relative py-16 md:py-24 px-4">
      {/* Blur effects */}
      <div className="absolute left-[-60px] top-[200px] blur-gradient-purple pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 max-w-[535px] mx-auto">
          <h2 className="text-4xl md:text-[60px] font-bold font-commissioner text-gradient leading-tight">
            {t("success.title")}
          </h2>
          <p className="text-xl font-normal font-inter text-[#A7AFBE]">
            {t("success.subtitle")}
          </p>
        </div>

        <div className="space-y-12">
          {/* Tornix Story */}
          <div className="max-w-[1072px] mx-auto p-6 md:p-8 rounded-xl border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Video */}
              <div className="relative rounded-2xl border border-[rgba(0,212,255,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)] overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/jbuQf16vO-4"
                  title="Tornix Project Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="space-y-6 bg-[#0E1525] p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src="/tornix-logo.png"
                    alt="Tornix logo"
                    className="w-16 h-16 object-contain"
                  />
                  <span className="px-3 py-1 rounded-full border border-[rgba(121,64,190,0.50)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#7C39D3]">
                    {t("success.tornix.badge")}
                  </span>
                </div>

                <h3 className="text-2xl md:text-[30px] font-semibold font-poppins text-[#FCFBF8] tracking-tight">
                  {t("success.tornix.title")}
                </h3>

                <p className="text-base font-normal font-inter text-[rgba(250,250,250,0.90)] leading-[26px]">
                  {t("success.tornix.description")}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold font-poppins text-[#FCFBF8]">
                    {t("success.tornix.focus")}
                  </h4>
                  <ul className="space-y-2">
                    {tornixPoints.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#7C39D3] flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-normal font-inter text-[rgba(250,250,250,0.80)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Engineers Story */}
          <div className="max-w-[1072px] mx-auto p-6 md:p-8 rounded-xl border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Video */}
              <div className="relative rounded-2xl border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)] overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/4T1_Spk9dss"
                  title="Professional Engineers Project Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="space-y-6 bg-[#0E1525] p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src="/pe-logo.webp"
                    alt="Professional Engineers logo"
                    className="h-16 w-auto object-contain"
                  />
                  <span className="px-3 py-1 rounded-full border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#7C39D3]">
                    {t("success.pe.badge")}
                  </span>
                </div>

                <h3 className="text-2xl md:text-[30px] font-semibold font-poppins text-[#FCFBF8] tracking-tight">
                  {t("success.pe.title")}
                </h3>

                <p className="text-base font-normal font-inter text-[rgba(250,250,250,0.90)] leading-[26px]">
                  {t("success.pe.description")}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold font-poppins text-[#FCFBF8]">
                    {t("success.pe.focus")}
                  </h4>
                  <ul className="space-y-2">
                    {pePoints.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#7C39D3] flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-normal font-inter text-[rgba(250,250,250,0.80)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative images */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8196a551c63dea243e7d8fd21dba277125826898?width=1220"
        alt=""
        className="absolute right-0 bottom-0 w-[610px] h-auto opacity-60 hidden xl:block pointer-events-none"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/9fa9d04c3f280557a26608839e63d05f10acd9b6?width=536"
        alt=""
        className="absolute left-0 bottom-20 w-[268px] h-auto opacity-60 hidden xl:block pointer-events-none"
      />
    </section>
  );
}
