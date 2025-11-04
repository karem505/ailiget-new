import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Ahmed Alsenosy",
    role: "CEO",
    position: "General Manager",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8e14fe56939827f567f7772c1176762f02b45bf0?width=258",
  },
  {
    name: "Dr. Karem Shohoud",
    role: "CMO",
    position: "Chief Executive Officer",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8a30d450e67e3f46363339267dd2a4e2c7bc28c6?width=288",
  },
  {
    name: "Dr. Sohaila Abuelliel",
    role: "CMO",
    position: "Chief Executive Officer",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/c8094a62569ee3d3b7a08b67ea5cdeee904b4d4c?width=250",
  },
];

const placeholderMembers = [
  { name: "Dr. User two", role: "CMO", position: "Chief Executive Officer" },
  { name: "Dr. User three", role: "CMO", position: "Chief Executive Officer" },
  { name: "Dr. User four", role: "CMO", position: "Chief Executive Officer" },
  { name: "Dr. User one", role: "CMO", position: "Chief Executive Officer" },
];

export default function TeamSection() {
  return (
    <section className="relative py-16 md:py-24 px-4">
      {/* Blur effect */}
      <div className="absolute right-[-60px] bottom-0 blur-gradient-cyan pointer-events-none" />

      <div className="relative z-10 max-w-[1348px] mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#FCFBF8]">
            MEET OUR TEAM
          </h2>
          <p className="text-xl font-normal font-inter text-[#A7AFBE]">
            Expertise Driving Innovation
          </p>
        </div>

        {/* Team Grid */}
        <div className="space-y-10">
          {/* Main Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="relative w-full max-w-[392px]">
                <div className="absolute inset-0 rounded-full border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522] backdrop-blur-[10px] shadow-[0_7px_29px_0_rgba(0,0,0,0.30),0_0_18px_0_rgba(0,212,255,0.10)]" />
                <div className="relative flex flex-col items-center gap-9 p-14">
                  <div className="w-32 h-32 rounded-2xl border-2 border-[rgba(103,80,164,0.08)] overflow-hidden shadow-[0_0_40px_0_rgba(0,212,255,0.50),0_0_80px_0_rgba(153,82,224,0.30)]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold font-poppins text-[#FCFBF8] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold font-inter text-[#7C39D3]">
                      {member.role}
                    </p>
                    <p className="text-sm font-normal font-inter text-[#A7AFBE]">
                      {member.position}
                    </p>

                    <button className="inline-flex items-center gap-2 px-3 py-2 rounded-[14px] border border-[rgba(103,80,164,0.08)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[10px] shadow-[0_8px_32px_0_rgba(0,0,0,0.40),0_0_20px_0_rgba(0,212,255,0.15)]">
                      <Linkedin className="w-4 h-4 text-[#7C39D3]" />
                      <span className="text-sm font-medium font-inter text-[#FCFBF8]">
                        LinkedIn
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder Members */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {placeholderMembers.map((member, idx) => (
              <div key={idx} className="relative w-full max-w-[315px]">
                <div className="absolute inset-0 rounded-full border-2 border-[rgba(121,64,190,0.50)] bg-[#0F1522] backdrop-blur-[8px] shadow-[0_6px_23px_0_rgba(0,0,0,0.30),0_0_15px_0_rgba(0,212,255,0.10)]" />
                <div className="relative flex flex-col items-center gap-7 p-12">
                  <div className="w-[104px] h-[104px] rounded-xl border border-[rgba(103,80,164,0.08)] bg-white/5 shadow-[0_0_32px_0_rgba(0,212,255,0.50),0_0_64px_0_rgba(153,82,224,0.30)]" />

                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold font-poppins text-[#FCFBF8] tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold font-inter text-[#7C39D3]">
                      {member.role}
                    </p>
                    <p className="text-sm font-normal font-inter text-[#A7AFBE]">
                      {member.position}
                    </p>

                    <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[rgba(103,80,164,0.08)] bg-[rgba(27,34,50,0.70)] backdrop-blur-[8px] text-sm font-medium font-inter text-[#FCFBF8]">
                      <Linkedin className="w-3 h-3 text-[#7C39D3]" />
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
