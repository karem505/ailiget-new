import { Linkedin, Twitter, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const solutionItems = [
    t("footer.solutions.ai"),
    t("footer.solutions.software"),
    t("footer.solutions.optimization"),
    t("footer.solutions.integration"),
  ];

  const companyItems = [
    t("footer.company.about"),
    t("footer.company.cases"),
    t("footer.company.team"),
    t("footer.company.contact"),
  ];

  return (
    <footer className="relative py-16 px-4 bg-[#0E1525]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3a49c9ec5a615b704e64cf103f706c4c5e46ef5b?width=100"
              alt="AILIGENT Logo"
              className="w-[50px] h-[50px]"
            />
            <p className="text-sm font-normal font-inter text-[#A7AFBE] leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] hover:bg-[rgba(27,34,50,0.90)] transition-colors">
                <Linkedin className="w-5 h-5 text-[#00D4FF]" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] hover:bg-[rgba(27,34,50,0.90)] transition-colors">
                <Twitter className="w-5 h-5 text-[#00D4FF]" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] hover:bg-[rgba(27,34,50,0.90)] transition-colors">
                <Facebook className="w-5 h-5 text-[#00D4FF]" />
              </button>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins text-[#FCFBF8]">
              {t("footer.solutions")}
            </h3>
            <ul className="space-y-2">
              {solutionItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-normal font-inter text-[#A7AFBE] hover:text-[#00D4FF] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins text-[#FCFBF8]">
              {t("footer.company")}
            </h3>
            <ul className="space-y-2">
              {companyItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-normal font-inter text-[#A7AFBE] hover:text-[#00D4FF] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins text-[#FCFBF8]">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="text-sm font-normal font-inter">
                <span className="text-[#A7AFBE]">{t("footer.contact.email")}</span>
                <a
                  href="mailto:info@ailigent.ai"
                  className="text-[#FCFBF8] hover:text-[#00D4FF] transition-colors"
                >
                  {t("footer.contact.emailAddress")}
                </a>
              </li>
              <li className="text-sm font-normal font-inter">
                <span className="text-[#A7AFBE]">{t("footer.contact.phone")}</span>
                <a
                  href="#"
                  className="text-[#FCFBF8] hover:text-[#00D4FF] transition-colors"
                >
                  {t("footer.contact.phoneLink")}
                </a>
              </li>
              <li className="text-sm font-normal font-inter">
                <span className="text-[#A7AFBE]">{t("footer.contact.location")}</span>
                <span className="text-[#FCFBF8]">{t("footer.contact.locationValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(121,64,190,0.30)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-normal font-inter text-[#A7AFBE]">
              {t("footer.copyright")}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm font-normal font-inter text-[#A7AFBE] hover:text-[#00D4FF] transition-colors"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#"
                className="text-sm font-normal font-inter text-[#A7AFBE] hover:text-[#00D4FF] transition-colors"
              >
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
