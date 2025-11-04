import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[450px] md:min-h-[504px] bg-gradient-to-br from-[#131119] via-[#41227C] to-[#4772A7] overflow-hidden">
      {/* Decorative 3D objects */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/299c44f9aa48255f1f96ce36485367b83a82258f?width=712"
        alt=""
        className="absolute left-[-80px] sm:left-[-55px] top-[49px] w-[200px] sm:w-[280px] md:w-[356px] h-[164px] sm:h-[230px] md:h-[292px] rotate-[-28.194deg] opacity-60 sm:opacity-80"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/14e5c9175eeea6e7ac9bde566303a9b10e9a1278?width=842"
        alt=""
        className="absolute right-[-50px] sm:right-0 top-[100px] sm:top-[150px] w-[250px] sm:w-[320px] md:w-[421px] h-[205px] sm:h-[262px] md:h-[345px] opacity-60 sm:opacity-80 hidden sm:block"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 text-center max-w-[1082px] mx-auto">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] font-bold font-commissioner uppercase text-[#FBFBFB] leading-tight tracking-tight px-2">
            {t("hero.title")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-commissioner text-[#CCC] max-w-full sm:max-w-[90%] md:max-w-[863px] mx-auto px-2 leading-relaxed">
            <span className="font-semibold">{t("hero.subtitle.part1")}</span>
            {t("hero.subtitle.part2")}
          </p>
        </div>

        <button className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full border border-[rgba(255,255,255,0.40)] bg-gradient-to-r from-[#7940BE] via-[#9952E0] via-[#5994B7] to-[#14B06C] shadow-lg text-white font-bold text-sm sm:text-base md:text-lg hover:shadow-xl transition-all">
          {t("hero.cta")}
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#7940BE]" />
          </div>
        </button>
      </div>
    </section>
  );
}
