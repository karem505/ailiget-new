import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[504px] bg-gradient-to-br from-[#131119] via-[#41227C] to-[#4772A7] overflow-hidden">
      {/* Decorative 3D objects */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/299c44f9aa48255f1f96ce36485367b83a82258f?width=712"
        alt=""
        className="absolute left-[-55px] top-[49px] w-[356px] h-[292px] rotate-[-28.194deg] opacity-80"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/14e5c9175eeea6e7ac9bde566303a9b10e9a1278?width=842"
        alt=""
        className="absolute right-0 top-[150px] w-[421px] h-[345px] opacity-80 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 py-16 md:py-24 text-center max-w-[1082px] mx-auto">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-[40px] font-bold font-commissioner uppercase text-[#FBFBFB] leading-tight tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-3xl lg:text-[32px] font-commissioner text-[#CCC] max-w-[863px] mx-auto">
            <span className="font-semibold">{t("hero.subtitle.part1")}</span>
            {t("hero.subtitle.part2")}
          </p>
        </div>

        <button className="flex items-center gap-1.5 px-4 py-3 rounded-full border border-[rgba(255,255,255,0.40)] bg-gradient-to-r from-[#7940BE] via-[#9952E0] via-[#5994B7] to-[#14B06C] shadow-lg text-white font-bold text-lg">
          {t("hero.cta")}
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-[#7940BE]" />
          </div>
        </button>
      </div>
    </section>
  );
}
