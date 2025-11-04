import { Lightbulb, Rocket, Link as LinkIcon, Zap, Brain, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Business Consultation & Customized Software",
    description: "We conduct in-depth analysis of a company's departments, identifying strengths and weaknesses. We then design and implement bespoke business automation and software solutions to address these specific challenges, optimizing processes and enhancing efficiency."
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Accelerate your digital journey with innovation-driven strategies, modern technologies, and scalable business models. Our approach optimizes operations, enhances agility, and delivers superior customer-centric experiences."
  },
  {
    icon: LinkIcon,
    title: "AI Integration",
    description: "Our AI integration services connect artificial intelligence with your existing ERP, CRM, and other enterprise systems."
  },
  {
    icon: Zap,
    title: "Agentic AI Development",
    description: "Empower your business with autonomous agents capable of complex problem-solving, advanced process automation, and intelligent decision-making."
  },
  {
    icon: Brain,
    title: "Generative AI Development",
    description: "Specializing in Generative AI in Saudi Arabia, we create solutions powered by Large Language Models (LLMs) for content generation, automation, and predictive analytics."
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "We design sophisticated conversational AI solutions that deliver human-like interactions, automate customer communication, and significantly improve user experiences."
  }
];

export default function ProfessionalServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-[1283px] mx-auto space-y-8">
        <h2 className="text-2xl md:text-[30px] font-bold font-poppins text-center text-[#FCFBF8]">
          PROFESSIONAL SERVICES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl border-2 border-[rgba(121,64,190,0.50)] bg-gradient-to-br from-[rgba(27,34,50,0.70)] to-[rgba(14,21,37,0.60)] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]"
            >
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-icon shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)]">
                    <service.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold font-poppins text-center text-[#FCFBF8] leading-7 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm font-normal font-inter text-center text-[#A7AFBE] leading-[22.75px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
