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
  "hero.title": "TURN YOUR DATA INTO DECISIONS - INTELLIGENTLY",
  "hero.subtitle.part1": "AILIGENT",
  "hero.subtitle.part2": " is a Saudi company specializing in AI automation systems that transform business operations and boost productivity by over 90%.",
  "hero.cta": "BOOK A FREE DEMO",

  // Services Section
  "services.title": "Our Services",
  "services.subtitle": "Transforming Businesses Through Intelligent Automation",
  "services.featured": "FEATURED PRODUCTS",
  "services.product.badge": "Product",
  "services.tornix.name": "Tornix",
  "services.tornix.description": "A powerful project management software with seamless integrations with popular platforms like Trello, Microsoft Project, and other commonly used enterprise tools, streamlining project workflows and collaboration.",
  "services.tornix.tag1": "Integration",
  "services.tornix.tag2": "Collaboration",
  "services.tornix.tag3": "Workflow",
  "services.pmo.name": "PMO Builder",
  "services.pmo.description": "A comprehensive Project Management Office (PMO) reporting tool. Leveraging AI, it provides project managers with full monitoring capabilities throughout the project lifecycle, generating insightful reports and ensuring proactive oversight.",
  "services.pmo.tag1": "AI-Powered",
  "services.pmo.tag2": "Reporting",
  "services.pmo.tag3": "Monitoring",

  // Stats Section
  "stats.title": "Proven Business Impact",
  "stats.subtitle": "Our AI-powered solutions deliver measurable results that transform businesses",

  // Professional Services Section
  "professional.title": "PROFESSIONAL SERVICES",
  "professional.service1.title": "Business Consultation & Customized Software",
  "professional.service1.description": "We conduct in-depth analysis of a company's departments, identifying strengths and weaknesses. We then design and implement bespoke business automation and software solutions to address these specific challenges, optimizing processes and enhancing efficiency.",
  "professional.service2.title": "Digital Transformation",
  "professional.service2.description": "Accelerate your digital journey with innovation-driven strategies, modern technologies, and scalable business models. Our approach optimizes operations, enhances agility, and delivers superior customer-centric experiences.",
  "professional.service3.title": "AI Development",
  "professional.service3.description": "We provide cutting-edge AI development services in Saudi Arabia, building intelligent solutions that enhance automation, decision-making, and customer experiences.",
  "professional.service4.title": "AI Integration",
  "professional.service4.description": "Our AI integration services connect artificial intelligence with your existing ERP, CRM, and other enterprise systems.",
  "professional.service5.title": "Agentic AI Development",
  "professional.service5.description": "Empower your business with autonomous agents capable of complex problem-solving, advanced process automation, and intelligent decision-making.",
  "professional.service6.title": "Generative AI Development",
  "professional.service6.description": "Specializing in Generative AI in Saudi Arabia, we create solutions powered by Large Language Models (LLMs) for content generation, automation, and predictive analytics.",
  "professional.service7.title": "Conversational AI",
  "professional.service7.description": "We design sophisticated conversational AI solutions that deliver human-like interactions, automate customer communication, and significantly improve user experiences.",

  // Success Stories Section
  "success.title": "SUCCESS STORIES",
  "success.subtitle": "Delivering Excellence Across Industries",
  "success.tornix.badge": "Featured Partnership",
  "success.tornix.title": "TORNIX",
  "success.tornix.description": "Tornix is an advanced AI-powered platform designed to transform project planning, execution, and delivery. Specializing in construction and large-scale projects, it integrates cutting-edge AI to bring automation, predictive analytics, and intelligent decision support.",
  "success.tornix.focus": "Project Focus:",
  "success.tornix.point1": "AI-Powered Project Management & Construction Intelligence",
  "success.tornix.point2": "AI-driven cost and resource estimation",
  "success.tornix.point3": "Automated risk detection and Monte Carlo simulations",
  "success.tornix.point4": "Natural language project queries",
  "success.tornix.point5": "Digital-twin simulations and dashboards",
  "success.pe.badge": "Client Success Story",
  "success.pe.title": "PROFESSIONAL ENGINEERS",
  "success.pe.description": "Delivering comprehensive full operation automation and custom software solutions for professional engineering firms, streamlining workflows and enhancing operational efficiency.",
  "success.pe.focus": "Project Focus:",
  "success.pe.point1": "Full Operation Automation & Custom Software Development",
  "success.pe.point2": "End-to-end automation implementation",
  "success.pe.point3": "Custom software solutions tailored to engineering workflows",
  "success.pe.point4": "Seamless integration with existing systems",
  "success.pe.point5": "Measurable efficiency improvements",

  // Foundation Section
  "foundation.title": "Our Foundation",
  "foundation.subtitle": "Guided by purpose, driven by innovation",
  "foundation.vision.title": "Our Vision",
  "foundation.vision.description": "Is to establish Ailigent as the world's leading partner for organizations driving sustainable digital transformation — powered by trusted, self-learning AI systems that work autonomously and deliver measurable performance impact.",
  "foundation.mission.title": "Our Mission",
  "foundation.mission.description": "Is to empower enterprises across all sectors to achieve operational excellence through autonomous AI solutions that drive strategic automation and transform data into real-time intelligent decisions.",
  "foundation.values.title": "Our Values",
  "foundation.value1": "Sustainable Innovation",
  "foundation.value2": "Integrity & Transparency",
  "foundation.value3": "Client-Centric Approach",
  "foundation.value4": "Collaboration & Inclusion",
  "foundation.value5": "Excellence in Execution",
  "foundation.value6": "Responsible AI",

  // Team Section
  "team.title": "MEET OUR TEAM",
  "team.subtitle": "Expertise Driving Innovation",
  "team.linkedin": "LinkedIn",
  "team.role.ceo": "CEO",
  "team.role.cmo": "CMO",
  "team.position.general": "General Manager",
  "team.position.ceo": "Chief Executive Officer",

  // Transform Section
  "transform.title": "READY TO TRANSFORM YOUR OPERATIONS !",
  "transform.subtitle": "Schedule a strategic consultation with our enterprise automation experts. We'll analyze your current processes and design a custom AI solution that delivers measurable ROI.",
  "transform.feature1.title": "Complimentary Assessment",
  "transform.feature1.description": "Free analysis of your automation potential and ROI projections.",
  "transform.feature2.title": "Custom Solution Design",
  "transform.feature2.description": "Tailored automation architecture for your specific needs.",
  "transform.feature3.title": "White-Glove Implementation",
  "transform.feature3.description": "End-to-end support from design through deployment and beyond.",

  // Contact Section
  "contact.title": "SCHEDULE YOUR CONSULTATION",
  "contact.subtitle": "Fill out the form below and our team will reach out within 24 hours to discuss your automation needs.",
  "contact.firstName": "First Name",
  "contact.lastName": "Last Name",
  "contact.email": "Email",
  "contact.phone": "Phone Number",
  "contact.company": "Company Name",
  "contact.message": "Message",
  "contact.firstName.placeholder": "John",
  "contact.lastName.placeholder": "Doe",
  "contact.email.placeholder": "john.doe@company.com",
  "contact.phone.placeholder": "+966 XX XXX XXXX",
  "contact.company.placeholder": "Your Company",
  "contact.message.placeholder": "Tell us about your automation needs...",
  "contact.submit": "Submit Request →",
  "contact.required": "*",

  // Footer
  "footer.description": "Transforming businesses through intelligent automation and AI solutions. Empowering enterprises to achieve operational excellence.",
  "footer.solutions": "SOLUTIONS",
  "footer.solutions.ai": "AI Automation",
  "footer.solutions.software": "Custom Software",
  "footer.solutions.optimization": "Process Optimization",
  "footer.solutions.integration": "Integration Services",
  "footer.company": "COMPANY",
  "footer.company.about": "About Us",
  "footer.company.cases": "Case Studies",
  "footer.company.team": "Team",
  "footer.company.contact": "Contact",
  "footer.contact": "CONTACT",
  "footer.contact.email": "Email: ",
  "footer.contact.emailAddress": "info@ailigent.ai",
  "footer.contact.phone": "Phone: ",
  "footer.contact.phoneLink": "Contact us",
  "footer.contact.location": "Location: ",
  "footer.contact.locationValue": "Saudi Arabia",
  "footer.copyright": "© 2025 AILIGENT. All rights reserved.",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Service",
};

// Arabic translations
const translationsAr: Record<string, string> = {
  // Header
  "header.language": "ع",
  "header.schedule": "احجز استشارة",

  // Hero Section
  "hero.title": "حوّل بياناتك إلى قرارات - بذكاء",
  "hero.subtitle.part1": "أيليجنت",
  "hero.subtitle.part2": " شركة سعودية متخصصة في أنظمة الأتمتة بالذكاء الاصطناعي التي تحول عمليات الأعمال وتعزز الإنتاجية بنسبة تزيد عن 90%.",
  "hero.cta": "احجز عرضاً تجريبياً مجانياً",

  // Services Section
  "services.title": "خدماتنا",
  "services.subtitle": "تحويل الأعمال من خلال الأتمتة الذكية",
  "services.featured": "المنتجات المميزة",
  "services.product.badge": "منتج",
  "services.tornix.name": "تورنيكس",
  "services.tornix.description": "برنامج قوي لإدارة المشاريع مع تكاملات سلسة مع المنصات الشائعة مثل Trello وMicrosoft Project وأدوات المؤسسات الأخرى شائعة الاستخدام، مما يبسط سير عمل المشروع والتعاون.",
  "services.tornix.tag1": "التكامل",
  "services.tornix.tag2": "التعاون",
  "services.tornix.tag3": "سير العمل",
  "services.pmo.name": "بناء مكتب إدارة المشاريع",
  "services.pmo.description": "أداة شاملة لإعداد تقارير مكتب إدارة المشاريع (PMO). من خلال الاستفادة من الذكاء الاصطناعي، توفر لمديري المشاريع قدرات مراقبة كاملة طوال دورة حياة المشروع، وإنشاء تقارير ثاقبة وضمان الإشراف الاستباقي.",
  "services.pmo.tag1": "مدعوم بالذكاء الاصطناعي",
  "services.pmo.tag2": "إعداد التقارير",
  "services.pmo.tag3": "المراقبة",

  // Stats Section
  "stats.title": "تأثير مثبت على الأعمال",
  "stats.subtitle": "حلولنا المدعومة بالذكاء الاصطناعي تقدم نتائج قابلة للقياس تحول الأعمال",

  // Professional Services Section
  "professional.title": "الخدمات المهنية",
  "professional.service1.title": "الاستشارات التجارية والبرمجيات المخصصة",
  "professional.service1.description": "نجري تحليلاً متعمقاً لأقسام الشركة، ونحدد نقاط القوة والضعف. ثم نصمم وننفذ حلول أتمتة الأعمال والبرمجيات المخصصة لمعالجة هذه التحديات المحددة، وتحسين العمليات وتعزيز الكفاءة.",
  "professional.service2.title": "التحول الرقمي",
  "professional.service2.description": "عجّل رحلتك الرقمية باستراتيجيات مدفوعة بالابتكار وتقنيات حديثة ونماذج أعمال قابلة للتوسع. نهجنا يحسّن العمليات، ويعزز المرونة، ويقدم تجارب متفوقة تركز على العملاء.",
  "professional.service3.title": "تطوير الذكاء الاصطناعي",
  "professional.service3.description": "نقدم خدمات تطوير الذكاء الاصطناعي المتطورة في المملكة العربية السعودية، نبني حلولاً ذكية تعزز الأتمتة واتخاذ القرارات وتجارب العملاء.",
  "professional.service4.title": "تكامل الذكاء الاصطناعي",
  "professional.service4.description": "تربط خدمات تكامل الذكاء الاصطناعي لدينا الذكاء الاصطناعي بأنظمة تخطيط موارد المؤسسات (ERP) وإدارة علاقات العملاء (CRM) وأنظمة المؤسسات الأخرى الموجودة لديك.",
  "professional.service5.title": "تطوير الذكاء الاصطناعي الوكيل",
  "professional.service5.description": "عزز عملك بوكلاء مستقلين قادرين على حل المشكلات المعقدة، والأتمتة المتقدمة للعمليات، واتخاذ القرارات الذكية.",
  "professional.service6.title": "تطوير الذكاء الاصطناعي التوليدي",
  "professional.service6.description": "متخصصون في الذكاء الاصطناعي التوليدي في المملكة العربية السعودية، نبتكر حلولاً مدعومة بنماذج اللغة الكبيرة (LLMs) لإنشاء المحتوى والأتمتة والتحليلات التنبؤية.",
  "professional.service7.title": "الذكاء الاصطناعي الحواري",
  "professional.service7.description": "نصمم حلول ذكاء اصطناعي حوارية متطورة تقدم تفاعلات شبيهة بالبشر، وتؤتمت التواصل مع العملاء، وتحسن تجارب المستخدمين بشكل كبير.",

  // Success Stories Section
  "success.title": "قصص النجاح",
  "success.subtitle": "تقديم التميز عبر الصناعات",
  "success.tornix.badge": "شراكة مميزة",
  "success.tornix.title": "تورنيكس",
  "success.tornix.description": "تورنيكس هي منصة متقدمة مدعومة بالذكاء الاصطناعي مصممة لتحويل تخطيط المشاريع وتنفيذها وتسليمها. متخصصة في البناء والمشاريع واسعة النطاق، تدمج الذكاء الاصطناعي المتطور لتوفير الأتمتة والتحليلات التنبؤية ودعم القرارات الذكية.",
  "success.tornix.focus": "تركيز المشروع:",
  "success.tornix.point1": "إدارة المشاريع والذكاء الإنشائي المدعوم بالذكاء الاصطناعي",
  "success.tornix.point2": "تقدير التكلفة والموارد المدفوع بالذكاء الاصطناعي",
  "success.tornix.point3": "الكشف التلقائي عن المخاطر ومحاكاة مونت كارلو",
  "success.tornix.point4": "استعلامات المشروع باللغة الطبيعية",
  "success.tornix.point5": "محاكاة التوأم الرقمي ولوحات المعلومات",
  "success.pe.badge": "قصة نجاح العميل",
  "success.pe.title": "المهندسون المحترفون",
  "success.pe.description": "تقديم أتمتة شاملة للعمليات الكاملة وحلول برمجية مخصصة لشركات الهندسة المهنية، مما يبسط سير العمل ويعزز الكفاءة التشغيلية.",
  "success.pe.focus": "تركيز المشروع:",
  "success.pe.point1": "أتمتة العمليات الكاملة وتطوير البرمجيات المخصصة",
  "success.pe.point2": "تنفيذ الأتمتة من البداية إلى النهاية",
  "success.pe.point3": "حلول برمجية مخصصة مصممة لسير عمل الهندسة",
  "success.pe.point4": "التكامل السلس مع الأنظمة الموجودة",
  "success.pe.point5": "تحسينات الكفاءة القابلة للقياس",

  // Foundation Section
  "foundation.title": "أساسنا",
  "foundation.subtitle": "موجهون بالهدف، مدفوعون بالابتكار",
  "foundation.vision.title": "رؤيتنا",
  "foundation.vision.description": "هي تأسيس أيليجنت كالشريك الرائد عالمياً للمؤسسات التي تقود التحول الرقمي المستدام — مدعومة بأنظمة ذكاء اصطناعي موثوقة ذاتية التعلم تعمل بشكل مستقل وتحقق تأثيراً قابلاً للقياس في الأداء.",
  "foundation.mission.title": "مهمتنا",
  "foundation.mission.description": "هي تمكين المؤسسات عبر جميع القطاعات لتحقيق التميز التشغيلي من خلال حلول الذكاء الاصطناعي المستقلة التي تدفع الأتمتة الاستراتيجية وتحول البيانات إلى قرارات ذكية في الوقت الفعلي.",
  "foundation.values.title": "قيمنا",
  "foundation.value1": "الابتكار المستدام",
  "foundation.value2": "النزاهة والشفافية",
  "foundation.value3": "نهج يركز على العميل",
  "foundation.value4": "التعاون والشمول",
  "foundation.value5": "التميز في التنفيذ",
  "foundation.value6": "الذكاء الاصطناعي المسؤول",

  // Team Section
  "team.title": "تعرف على فريقنا",
  "team.subtitle": "الخبرة تقود الابتكار",
  "team.linkedin": "لينكد إن",
  "team.role.ceo": "الرئيس التنفيذي",
  "team.role.cmo": "مدير التسويق",
  "team.position.general": "المدير العام",
  "team.position.ceo": "الرئيس التنفيذي للشركة",

  // Transform Section
  "transform.title": "هل أنت مستعد لتحويل عملياتك؟",
  "transform.subtitle": "احجز استشارة استراتيجية مع خبراء أتمتة المؤسسات لدينا. سنحلل عملياتك الحالية ونصمم حل ذكاء اصطناعي مخصص يحقق عائد استثمار قابل للقياس.",
  "transform.feature1.title": "تقييم مجاني",
  "transform.feature1.description": "تحليل مجاني لإمكانات الأتمتة لديك وتوقعات عائد الاستثمار.",
  "transform.feature2.title": "تصميم حل مخصص",
  "transform.feature2.description": "هندسة أتمتة مصممة خصيصاً لاحتياجاتك المحددة.",
  "transform.feature3.title": "تنفيذ بخدمة شاملة",
  "transform.feature3.description": "دعم شامل من التصميم وحتى النشر وما بعده.",

  // Contact Section
  "contact.title": "احجز استشارتك",
  "contact.subtitle": "املأ النموذج أدناه وسيتواصل معك فريقنا في غضون 24 ساعة لمناقشة احتياجات الأتمتة الخاصة بك.",
  "contact.firstName": "الاسم الأول",
  "contact.lastName": "اسم العائلة",
  "contact.email": "البريد الإلكتروني",
  "contact.phone": "رقم الهاتف",
  "contact.company": "اسم الشركة",
  "contact.message": "الرسالة",
  "contact.firstName.placeholder": "أحمد",
  "contact.lastName.placeholder": "محمد",
  "contact.email.placeholder": "ahmad.mohamed@company.com",
  "contact.phone.placeholder": "+966 XX XXX XXXX",
  "contact.company.placeholder": "شركتك",
  "contact.message.placeholder": "أخبرنا عن احتياجاتك للأتمتة...",
  "contact.submit": "إرسال الطلب ←",
  "contact.required": "*",

  // Footer
  "footer.description": "تحويل الأعمال من خلال الأتمتة الذكية وحلول الذكاء الاصطناعي. تمكين المؤسسات لتحقيق التميز التشغيلي.",
  "footer.solutions": "الحلول",
  "footer.solutions.ai": "أتمتة الذكاء الاصطناعي",
  "footer.solutions.software": "برمجيات مخصصة",
  "footer.solutions.optimization": "تحسين العمليات",
  "footer.solutions.integration": "خدمات التكامل",
  "footer.company": "الشركة",
  "footer.company.about": "من نحن",
  "footer.company.cases": "دراسات الحالة",
  "footer.company.team": "الفريق",
  "footer.company.contact": "تواصل معنا",
  "footer.contact": "التواصل",
  "footer.contact.email": "البريد الإلكتروني: ",
  "footer.contact.emailAddress": "info@ailigent.ai",
  "footer.contact.phone": "الهاتف: ",
  "footer.contact.phoneLink": "اتصل بنا",
  "footer.contact.location": "الموقع: ",
  "footer.contact.locationValue": "المملكة العربية السعودية",
  "footer.copyright": "© 2025 أيليجنت. جميع الحقوق محفوظة.",
  "footer.privacy": "سياسة الخصوصية",
  "footer.terms": "شروط الخدمة",
};
