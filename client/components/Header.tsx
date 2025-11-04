import { Globe, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-8 lg:px-[104px] py-2 sm:py-4">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full bg-[rgba(14,21,37,0.60)] backdrop-blur-[10px]">
        {/* Logo */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3a49c9ec5a615b704e64cf103f706c4c5e46ef5b?width=100"
          alt="AILIGENT Logo"
          className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px]"
        />

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-3 md:px-[17px] py-1.5 sm:py-2 md:py-[9px] rounded-[10px] md:rounded-[14px] border border-[rgba(0,212,255,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] shadow-[0_8px_32px_0_rgba(0,0,0,0.40),0_0_20px_0_rgba(0,212,255,0.15)] hover:bg-[rgba(27,34,50,0.90)] transition-all"
          >
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#00D4FF]" />
            <span className="text-xs sm:text-sm font-medium text-[#FCFBF8]">
              {language === "en" ? "EN" : "ع"}
            </span>
          </button>

          {/* Theme Toggle - Hidden on very small screens */}
          <button className="hidden xs:flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-[10px] md:rounded-[14px] border border-[rgba(0,212,255,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] shadow-[0_8px_32px_0_rgba(0,0,0,0.40),0_0_20px_0_rgba(0,212,255,0.15)]">
            <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#00D4FF]" />
          </button>

          {/* Schedule Consultation Button */}
          <button className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-[10px] md:rounded-[14px] bg-gradient-to-r from-[#9952E0] to-[#00D4FF] text-xs sm:text-sm font-semibold text-white hover:opacity-90 transition-opacity whitespace-nowrap">
            <span className="hidden sm:inline">{t("header.schedule")}</span>
            <span className="sm:hidden">{language === "en" ? "Book" : "احجز"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
