import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
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
              Transforming businesses through intelligent automation and AI solutions. Empowering enterprises to achieve operational excellence.
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
              SOLUTIONS
            </h3>
            <ul className="space-y-2">
              {["AI Automation", "Custom Software", "Process Optimization", "Integration Services"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-normal font-inter text-[#A7AFBE] hover:text-[#00D4FF] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins text-[#FCFBF8]">
              COMPANY
            </h3>
            <ul className="space-y-2">
              {["About Us", "Case Studies", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-normal font-inter text-[#A7AFBE] hover:text-[#00D4FF] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins text-[#FCFBF8]">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li className="text-sm font-normal font-inter">
                <span className="text-[#A7AFBE]">Email: </span>
                <a href="mailto:info@ailigent.ai" className="text-[#FCFBF8] hover:text-[#00D4FF] transition-colors">
                  info@ailigent.ai
                </a>
              </li>
              <li className="text-sm font-normal font-inter">
                <span className="text-[#A7AFBE]">Phone: </span>
                <a href="#" className="text-[#FCFBF8] hover:text-[#00D4FF] transition-colors">
                  Contact us
                </a>
              </li>
              <li className="text-sm font-normal font-inter">
                <span className="text-[#A7AFBE]">Location: </span>
                <span className="text-[#FCFBF8]">Saudi Arabia</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(121,64,190,0.30)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-normal font-inter text-[#A7AFBE]">
              © 2025 AILIGENT. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm font-normal font-inter text-[#A7AFBE] hover:text-[#00D4FF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm font-normal font-inter text-[#A7AFBE] hover:text-[#00D4FF] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
