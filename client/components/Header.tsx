import { Globe, Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-[104px] py-4">
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-[rgba(14,21,37,0.60)] backdrop-blur-[10px]">
        {/* Logo */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3a49c9ec5a615b704e64cf103f706c4c5e46ef5b?width=100"
          alt="AILIGENT Logo"
          className="w-[50px] h-[50px]"
        />

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button className="flex items-center gap-2 px-[17px] py-[9px] rounded-[14px] border border-[rgba(0,212,255,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] shadow-[0_8px_32px_0_rgba(0,0,0,0.40),0_0_20px_0_rgba(0,212,255,0.15)]">
            <Globe className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm font-medium text-[#FCFBF8]">EN</span>
          </button>

          {/* Theme Toggle */}
          <button className="flex items-center justify-center w-10 h-10 rounded-[14px] border border-[rgba(0,212,255,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] shadow-[0_8px_32px_0_rgba(0,0,0,0.40),0_0_20px_0_rgba(0,212,255,0.15)]">
            <Sun className="w-4 h-4 text-[#00D4FF]" />
          </button>

          {/* Schedule Consultation Button */}
          <button className="px-6 py-2.5 rounded-[14px] bg-gradient-to-r from-[#9952E0] to-[#00D4FF] text-sm font-semibold text-white">
            Schedule Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
