import { Sparkles, Award, Heart, Users, TrendingUp, Target } from "lucide-react";

export default function FoundationSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 max-w-[1308px] mx-auto">
      {/* Blur effect */}
      <div className="absolute right-[-100px] top-0 blur-gradient-purple pointer-events-none" />
      
      <div className="relative z-10 space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-3xl md:text-[44px] font-medium font-commissioner uppercase text-[#FBFBFB] leading-tight">
            Our Foundation
          </h2>
          <p className="text-base font-medium font-commissioner text-[#CCC]">
            Guided by purpose, driven by innovation
          </p>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="flex flex-col items-center gap-8 p-8 rounded-2xl border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522]">
            <div className="w-full space-y-8">
              <div className="flex justify-start">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b28b0fc57117743c9aac9f7afb6b7eb296c960b1?width=112" 
                  alt="" 
                  className="w-14 h-auto"
                />
              </div>
              <div className="space-y-3.5">
                <h3 className="text-xl font-medium font-commissioner text-[#FBFBFB]">
                  Our Vision
                </h3>
                <p className="text-sm font-normal font-commissioner text-[#CCC] leading-[19.6px]">
                  Is to establish Ailigent as the world's leading partner for organizations driving sustainable digital transformation — powered by trusted, self-learning AI systems that work autonomously and deliver measurable performance impact.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission Card */}
          <div className="flex flex-col items-center gap-8 p-8 rounded-2xl border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522]">
            <div className="w-full space-y-8">
              <div className="flex justify-start">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c5a34c9be2a22bc4b31ee2540d9415db0c9ced40?width=112" 
                  alt="" 
                  className="w-14 h-auto"
                />
              </div>
              <div className="space-y-3.5">
                <h3 className="text-xl font-medium font-commissioner text-[#FBFBFB]">
                  Our Mission
                </h3>
                <p className="text-sm font-normal font-commissioner text-[#CCC] leading-[19.6px]">
                  Is to empower enterprises across all sectors to achieve operational excellence through autonomous AI solutions that drive strategic automation and transform data into real-time intelligent decisions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Values Card */}
          <div className="flex flex-col items-center gap-8 p-8 rounded-2xl border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522]">
            <div className="w-full space-y-8">
              <div className="flex justify-start">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c5a34c9be2a22bc4b31ee2540d9415db0c9ced40?width=112" 
                  alt="" 
                  className="w-14 h-auto"
                />
              </div>
              <div className="space-y-3.5">
                <h3 className="text-xl font-medium font-commissioner text-[#FBFBFB]">
                  Our Values
                </h3>
                <div className="space-y-1">
                  {[
                    { icon: Sparkles, text: "Sustainable Innovation" },
                    { icon: Award, text: "Integrity & Transparency" },
                    { icon: Heart, text: "Client-Centric Approach" },
                    { icon: Users, text: "Collaboration & Inclusion" },
                    { icon: TrendingUp, text: "Excellence in Execution" },
                    { icon: Target, text: "Responsible AI" },
                  ].map((value, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <value.icon className="w-5 h-5 text-[rgba(171,109,247,0.40)]" strokeWidth={1.67} />
                      <span className="text-sm font-medium font-inter text-[rgba(250,250,250,0.90)]">
                        {value.text}
                      </span>
                    </div>
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
