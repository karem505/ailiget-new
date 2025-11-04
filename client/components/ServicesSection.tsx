import { LayoutGrid, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 px-4">
      {/* Blur effect */}
      <div className="absolute left-[-100px] top-0 blur-gradient-purple pointer-events-none" />

      <div className="relative z-10 max-w-[1310px] mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-3xl md:text-[44px] font-medium font-commissioner uppercase text-[#FBFBFB]">
            {t("services.title")}
          </h2>
          <p className="text-base font-medium font-commissioner text-[#CCC]">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Featured Products */}
        <div className="space-y-8">
          <h3 className="text-2xl md:text-[30px] font-bold font-poppins text-center text-[#FCFBF8]">
            {t("services.featured")}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1024px] mx-auto">
            {/* Tornix Card */}
            <div className="relative p-6 rounded-xl border border-[rgba(121,64,190,0.50)] bg-gradient-to-br from-[rgba(27,34,50,0.70)] to-[rgba(14,21,37,0.60)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-0.5 rounded-full border border-[rgba(171,109,247,0.40)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#4F378A]">
                    {t("services.product.badge")}
                  </span>
                  <div className="p-3 rounded-xl bg-gradient-icon shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)]">
                    <LayoutGrid className="w-6 h-6 text-white" />
                  </div>
                </div>

                <img
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
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-0.5 rounded-full border border-[rgba(171,109,247,0.40)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#6750A4]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PMO Builder Card */}
            <div className="relative p-6 rounded-xl border border-[rgba(121,64,190,0.50)] bg-gradient-to-br from-[rgba(27,34,50,0.70)] to-[rgba(14,21,37,0.60)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-0.5 rounded-full border border-[rgba(121,64,190,0.50)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#7940BE]">
                    {t("services.product.badge")}
                  </span>
                  <div className="p-3 rounded-xl bg-gradient-icon shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)]">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                </div>

                <img
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
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-0.5 rounded-full border border-[rgba(121,64,190,0.50)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#7940BE]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
