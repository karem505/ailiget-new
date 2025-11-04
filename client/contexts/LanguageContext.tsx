import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "ar" : "en";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  useEffect(() => {
    // Update document direction and lang attribute
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const translations = language === "ar" ? translationsAr : translationsEn;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// English translations
const translationsEn: Record<string, string> = {
  // Header
  "header.language": "EN",
  "header.schedule": "Schedule Consultation",

  // Hero Section
  "hero.title.part1": "Transforming Business Operations with",
  "hero.title.part2": "AI",
  "hero.subtitle":
    "We deliver customized AI solutions that optimize workflows, enhance decision-making, and unlock actionable insights for sustainable growth.",
  "hero.cta": "Get Started Today",
  "hero.learn": "Learn More",

  // Services Section
  "services.title": "Our Services",
  "services.subtitle": "Comprehensive AI solutions tailored to your business needs",

  // Professional Services Section
  "professional.title": "Professional Services",
  "professional.subtitle": "Expert consulting and implementation support",

  // Success Stories Section
  "success.title": "Success Stories",
  "success.subtitle": "Real results from our clients",

  // Team Section
  "team.title": "Our Team",
  "team.subtitle": "Meet the experts behind our AI solutions",

  // Transform Section
  "transform.title": "Ready to Transform Your Business?",
  "transform.subtitle":
    "Let's discuss how AI can drive your business forward",
  "transform.cta": "Schedule a Free Consultation",

  // Contact Section
  "contact.title": "Get in Touch",
  "contact.subtitle": "We'd love to hear from you",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.message": "Message",
  "contact.send": "Send Message",

  // Footer
  "footer.tagline": "Empowering businesses with intelligent AI solutions",
  "footer.rights": "All rights reserved.",
};

// Arabic translations
const translationsAr: Record<string, string> = {
  // Header
  "header.language": "ع",
  "header.schedule": "حجز استشارة",

  // Hero Section
  "hero.title.part1": "تحويل عمليات الأعمال باستخدام",
  "hero.title.part2": "الذكاء الاصطناعي",
  "hero.subtitle":
    "نقدم حلول الذكاء الاصطناعي المخصصة التي تحسن سير العمل، وتعزز اتخاذ القرارات، وتفتح رؤى قابلة للتنفيذ للنمو المستدام.",
  "hero.cta": "ابدأ اليوم",
  "hero.learn": "اعرف المزيد",

  // Services Section
  "services.title": "خدماتنا",
  "services.subtitle": "حلول ذكاء اصطناعي شاملة مصممة خصيصاً لاحتياجات عملك",

  // Professional Services Section
  "professional.title": "الخدمات المهنية",
  "professional.subtitle": "استشارات خبراء ودعم التنفيذ",

  // Success Stories Section
  "success.title": "قصص النجاح",
  "success.subtitle": "نتائج حقيقية من عملائنا",

  // Team Section
  "team.title": "فريقنا",
  "team.subtitle": "تعرف على الخبراء وراء حلول الذكاء الاصطناعي لدينا",

  // Transform Section
  "transform.title": "هل أنت مستعد لتحويل عملك؟",
  "transform.subtitle": "دعنا نناقش كيف يمكن للذكاء الاصطناعي دفع عملك إلى الأمام",
  "transform.cta": "احجز استشارة مجانية",

  // Contact Section
  "contact.title": "تواصل معنا",
  "contact.subtitle": "نود أن نسمع منك",
  "contact.name": "الاسم",
  "contact.email": "البريد الإلكتروني",
  "contact.message": "الرسالة",
  "contact.send": "إرسال الرسالة",

  // Footer
  "footer.tagline": "تمكين الشركات بحلول الذكاء الاصطناعي الذكية",
  "footer.rights": "جميع الحقوق محفوظة.",
};
