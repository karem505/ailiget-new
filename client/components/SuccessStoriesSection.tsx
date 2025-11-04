import { CheckCircle } from "lucide-react";

export default function SuccessStoriesSection() {
  return (
    <section className="relative py-16 md:py-24 px-4">
      {/* Blur effects */}
      <div className="absolute left-[-60px] top-[200px] blur-gradient-purple pointer-events-none" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 max-w-[535px] mx-auto">
          <h2 className="text-4xl md:text-[60px] font-bold font-commissioner text-gradient leading-tight">
            SUCCESS STORIES
          </h2>
          <p className="text-xl font-normal font-inter text-[#A7AFBE]">
            Delivering Excellence Across Industries
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Tornix Story */}
          <div className="max-w-[1072px] mx-auto p-6 md:p-8 rounded-xl border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Video Placeholder */}
              <div className="relative rounded-2xl border border-[rgba(0,212,255,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)] overflow-hidden aspect-video">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dead134dbaad003fc3723e554f6c728695ce0e36?width=1026" 
                  alt="Tornix Demo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[68px] h-[48px] bg-[#FF0105] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6 bg-[#0E1525] p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e493a03f79314c81e8dc8284763f092d69f3fd3b?width=128" 
                    alt="Tornix logo" 
                    className="w-16 h-16"
                  />
                  <span className="px-3 py-1 rounded-full border border-[rgba(121,64,190,0.50)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#7C39D3]">
                    Featured Partnership
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-[30px] font-semibold font-poppins text-[#FCFBF8] tracking-tight">
                  TORNIX
                </h3>
                
                <p className="text-base font-normal font-inter text-[rgba(250,250,250,0.90)] leading-[26px]">
                  Tornix is an advanced AI-powered platform designed to transform project planning, execution, and delivery. Specializing in construction and large-scale projects, it integrates cutting-edge AI to bring automation, predictive analytics, and intelligent decision support.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold font-poppins text-[#FCFBF8]">
                    Project Focus:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "AI-Powered Project Management & Construction Intelligence",
                      "AI-driven cost and resource estimation",
                      "Automated risk detection and Monte Carlo simulations",
                      "Natural language project queries",
                      "Digital-twin simulations and dashboards"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#7C39D3] flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-normal font-inter text-[rgba(250,250,250,0.80)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional Engineers Story */}
          <div className="max-w-[1072px] mx-auto p-6 md:p-8 rounded-xl border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.30),0_0_20px_0_rgba(0,212,255,0.10)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Video Placeholder */}
              <div className="relative rounded-2xl border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)] overflow-hidden aspect-video">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/14b40dd46970b9887fe15c3f51b62e9d36ecfbe1?width=1026" 
                  alt="Professional Engineers Demo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[68px] h-[48px] bg-[#FF0105] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6 bg-[#0E1525] p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/053234511e75db7a49e32cb18b5891e9514bfbf9?width=208" 
                    alt="Professional Engineers logo" 
                    className="h-16 w-auto"
                  />
                  <span className="px-3 py-1 rounded-full border border-[rgba(121,64,190,0.30)] bg-[rgba(27,34,50,0.70)] text-xs font-semibold text-[#7C39D3]">
                    Client Success Story
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-[30px] font-semibold font-poppins text-[#FCFBF8] tracking-tight">
                  PROFESSIONAL ENGINEERS
                </h3>
                
                <p className="text-base font-normal font-inter text-[rgba(250,250,250,0.90)] leading-[26px]">
                  Delivering comprehensive full operation automation and custom software solutions for professional engineering firms, streamlining workflows and enhancing operational efficiency.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold font-poppins text-[#FCFBF8]">
                    Project Focus:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Full Operation Automation & Custom Software Development",
                      "End-to-end automation implementation",
                      "Custom software solutions tailored to engineering workflows",
                      "Seamless integration with existing systems",
                      "Measurable efficiency improvements"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#7C39D3] flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-normal font-inter text-[rgba(250,250,250,0.80)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative images */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/8196a551c63dea243e7d8fd21dba277125826898?width=1220" 
        alt="" 
        className="absolute right-0 bottom-0 w-[610px] h-auto opacity-60 hidden xl:block pointer-events-none"
      />
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/9fa9d04c3f280557a26608839e63d05f10acd9b6?width=536" 
        alt="" 
        className="absolute left-0 bottom-20 w-[268px] h-auto opacity-60 hidden xl:block pointer-events-none"
      />
    </section>
  );
}
