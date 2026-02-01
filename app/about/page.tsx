"use client";

import { Download, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-[#0b0b0b] text-white px-6 md:px-20 py-24 overflow-hidden font-sans">

      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#72A9D1]/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Heading */}
      <div className="relative text-center mb-24">
        <h1 className="absolute inset-0 flex items-center justify-center text-[72px] md:text-[130px] font-extrabold text-white/5 tracking-widest select-none pointer-events-none uppercase">
          ABOUT ME
        </h1>
        <h2 className="relative text-4xl md:text-6xl font-black tracking-tight">
          ABOUT <span className="text-[#72A9D1]">ME</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Info Section */}
        <div className="space-y-10">
          <h3 className="text-2xl font-bold tracking-wide uppercase text-[#72A9D1]">Personal Info</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            <div className="space-y-4">
              <p className="text-[#BDBDBD]"><span className="text-white font-bold">Name :</span> Muhammad Hammad</p>
              <p className="text-[#BDBDBD]"><span className="text-white font-bold">Location :</span> Islamabad, Pakistan</p>
              <p className="text-[#BDBDBD]"><span className="text-white font-bold">Nationality :</span> Pakistan</p>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2 text-[#BDBDBD] font-bold uppercase text-xs tracking-widest">
                <Phone size={14} className="text-[#72A9D1]" /> Phone:
              </p>
              <p className="text-[#72A9D1] font-black text-lg">+92 301 9873807</p>

              <p className="flex items-center gap-2 text-[#BDBDBD] font-bold uppercase text-xs tracking-widest pt-4">
                <Mail size={14} className="text-[#72A9D1]" /> Email:
              </p>
              <p className="text-[#72A9D1] font-black break-all">madi873807@gmail.com</p>
            </div>
          </div>

          {/* Download CV */}
          <a href="/Resume.pdf" download>
            <button
              className="
      group relative mt-10 flex items-center overflow-hidden rounded-full 
      border-2 border-[#72A9D1] px-10 py-4 font-black text-white transition-all duration-300
      hover:shadow-[0_0_30px_rgba(114,169,209,0.5)] active:scale-95
    "
            >
              <span className="absolute inset-0 bg-[#72A9D1] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>

              <span className="mr-12 tracking-[0.2em] uppercase text-sm relative z-10 transition-colors duration-300 group-hover:text-black">
                Download CV
              </span>

              <span className="absolute right-0 flex h-full w-14 items-center justify-center bg-[#72A9D1] text-black z-20">
                <Download size={22} strokeWidth={3} className="group-hover:animate-bounce" />
              </span>
            </button>
          </a>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { value: "4+", l1: "YEARS OF", l2: "EXPERIENCE" },
            { value: "120+", l1: "PROJECTS", l2: "COMPLETED" },
            { value: "25+", l1: "HAPPY", l2: "CLIENTS" },
            { value: "30+", l1: "CAMPAIGNS", l2: "LAUNCHED" },
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl border border-[#5E5D6C]/50 bg-[#2D4B73]/20 p-8 transition-all duration-300 hover:border-[#72A9D1] hover:bg-[#72A9D1]/10 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(114,169,209,0.15)]">
              <h4 className="text-5xl font-black text-[#72A9D1] mb-4 drop-shadow-[0_0_10px_rgba(114,169,209,0.3)]">{item.value}</h4>
              <div className="flex items-center gap-4">
                <div className="h-[1.5px] w-8 bg-[#5E5D6C] group-hover:bg-[#72A9D1] transition-colors"></div>
                <p className="text-sm font-bold leading-tight tracking-widest text-[#BDBDBD] uppercase">{item.l1} <br /> {item.l2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
