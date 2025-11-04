import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactFormSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-[1312px] mx-auto">
        <div className="p-8 md:p-12 rounded-xl border-2 border-[rgba(121,64,190,0.50)] bg-gradient-to-br from-[rgba(27,34,50,0.70)] to-[rgba(14,21,37,0.60)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-poppins text-[#FCFBF8]">
                {t("contact.title")}
              </h2>
              <p className="text-lg font-normal font-inter text-[#A7AFBE] max-w-[768px] mx-auto">
                {t("contact.subtitle")}
              </p>
            </div>

            {/* Form */}
            <form className="max-w-[672px] mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium font-inter text-[#FCFBF8]">
                    {t("contact.firstName")} {t("contact.required")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]"
                    placeholder={t("contact.firstName.placeholder")}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-inter text-[#FCFBF8]">
                    {t("contact.lastName")} {t("contact.required")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]"
                    placeholder={t("contact.lastName.placeholder")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium font-inter text-[#FCFBF8]">
                  {t("contact.email")} {t("contact.required")}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]"
                  placeholder={t("contact.email.placeholder")}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium font-inter text-[#FCFBF8]">
                  {t("contact.company")}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]"
                  placeholder={t("contact.company.placeholder")}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium font-inter text-[#FCFBF8]">
                  {t("contact.message")} {t("contact.required")}
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] text-[#FCFBF8] placeholder:text-[#A7AFBE] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] resize-none"
                  placeholder={t("contact.message.placeholder")}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-[#7940BE] via-[#9952E0] via-[#5994B7] to-[#14B06C] text-lg font-bold font-inter text-white shadow-lg hover:shadow-xl transition-shadow"
              >
                {t("contact.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
