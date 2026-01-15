"use client";

import React from "react";
import { Briefcase, GraduationCap, Video, Palette, Megaphone } from "lucide-react";
import {
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiCanva,
  SiAdobeillustrator
} from "react-icons/si";

export default function SkillsPage() {
  // EXPERTISE / TOOLS (on top)
  const expertise = [
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={50} /> },
    { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro size={50} /> },
    { name: "Adobe After Effects", icon: <SiAdobeaftereffects size={50} /> },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={50} /> },
    { name: "Canva", icon: <SiCanva size={50} /> },
  ];

  // SKILLS (below)
  const skills = [
    { name: "Video Editing", icon: <Video size={50} /> },
    { name: "Graphic Designing", icon: <Palette size={50} /> },
    { name: "Digital Marketing", icon: <Megaphone size={50} /> },
  ];

  return (
    <section className="relative min-h-screen bg-[#0b0b0b] text-white px-6 md:px-20 py-24 font-sans overflow-hidden">

      {/* Background Glow Circles */}
      <div className="absolute -top-10 -left-10 w-[500px] h-[500px] bg-[#72A9D1]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-[400px] h-[400px] bg-[#2D4B73]/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* ===== EXPERTISE ===== */}
<div className="relative text-center mb-20">
  {/* Background Text: Mobile pe chota (text-5xl) aur desktop pe bada (md:text-[140px]) */}
  <h1 className="absolute inset-0 flex items-center justify-center text-5xl sm:text-7xl md:text-[140px] font-extrabold text-white/5 tracking-widest select-none pointer-events-none uppercase leading-none">
    Expertise
  </h1>
  
  {/* Foreground Text */}
  <h2 className="relative text-4xl md:text-6xl font-black tracking-tight uppercase py-4">
    MY <span className="text-[#72A9D1]">Skills</span>
  </h2>
</div>







      <div className="flex flex-wrap justify-center gap-12 mb-32">
        {expertise.map((item, i) => (
          <div key={i} className="flex flex-col items-center group transition-transform duration-500 hover:scale-110">
            <div className="p-5 rounded-full bg-[#5E5D6C]/20 shadow-[0_0_25px_rgba(114,169,209,0.3)] group-hover:shadow-[0_0_40px_rgba(114,169,209,0.7)] transition-shadow duration-500">
              {React.cloneElement(item.icon, { className: "text-[#72A9D1]" })}
            </div>
            <span className="mt-3 text-sm md:text-base font-bold uppercase text-[#BDBDBD] group-hover:text-[#72A9D1] transition-colors duration-500">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* ===== SKILLS ===== */}
      <div className="text-center mb-16 relative"></div>

      <div className="flex flex-wrap justify-center gap-12 mb-40">
        {skills.map((item, i) => (
          <div key={i} className="flex flex-col items-center group transition-transform duration-500 hover:scale-110">
            <div className="p-5 rounded-full bg-[#5E5D6C]/20 shadow-[0_0_25px_rgba(45,75,115,0.3)] group-hover:shadow-[0_0_40px_rgba(114,169,209,0.7)] transition-shadow duration-500">
              {React.cloneElement(item.icon, { className: "text-[#2D4B73]" })}
            </div>
            <span className="mt-3 text-sm md:text-base font-bold uppercase text-[#BDBDBD] group-hover:text-[#2D4B73] transition-colors duration-500">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <hr className="border-white/10 max-w-4xl mx-auto mb-32" />

      {/* EXPERIENCE & EDUCATION */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-20 tracking-tight uppercase">
          Experience & <span className="text-[#72A9D1]">Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {/* EXPERIENCE */}
          <div className="space-y-12 relative border-l-2 border-[#5E5D6C] pl-8 ml-4">
            {[
              { date: "2023 - 2025", title: "Professional Video Editor", sub: "Industry Expert", desc: "Creating high-quality, engaging video content that aligns with clients' branding and marketing objectives." },
              { date: "CURRENT", title: "Freelance Editor", sub: "Video Production", desc: "Specialized in 3 years of industry experience across various digital platforms." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[53px] top-0 w-12 h-12 bg-[#72A9D1] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(114,169,209,0.5)]">
                  <Briefcase size={20} />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#2D4B73]/20 text-[10px] font-bold tracking-widest text-[#BDBDBD] mb-4">{item.date}</span>
                <h4 className="text-xl font-black mb-2 tracking-tight group-hover:text-[#72A9D1] transition-colors uppercase">
                  {item.title} <span className="text-[#5E5D6C] font-bold mx-2">—</span> <span className="text-[#BDBDBD]">{item.sub}</span>
                </h4>
                <p className="text-[#BDBDBD] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <div className="space-y-12 relative border-l-2 border-[#5E5D6C] pl-8 ml-4">
            {[
              { date: "2021 - 2022", title: "FSC- Pre-Engineering", sub: "Base College" },
              { date: "2020 - 2021", title: "Matric Computer Science", sub: "F.G Public School" }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[53px] top-0 w-12 h-12 bg-[#72A9D1] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(114,169,209,0.5)]">
                  <GraduationCap size={20} />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#2D4B73]/20 text-[10px] font-bold tracking-widest text-[#BDBDBD] mb-4">{item.date}</span>
                <h4 className="text-xl font-black mb-2 tracking-tight uppercase">{item.title} <span className="text-[#5E5D6C] font-bold mx-2">—</span> <span className="text-[#BDBDBD]">{item.sub}</span></h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
