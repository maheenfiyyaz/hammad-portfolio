"use client";

import React from "react";
import { ExternalLink, Video, Palette } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      name: "Cinematic Video Edit",
      category: "Video Editing",
      img: "/WhatsApp Image 2026-01-11 at 21.45.20.jpeg",
      links: [
        { title: "Short Film Teaser", url: "https://behance.net/gallery/241960235/SHORT-FILM-TEASER" },
        { title: "Meena-Bazar", url: "http://behance.net/gallery/221331621/Meena-Bazar" },
        { title: "Bridal Dress shoot", url: "http://behance.net/gallery/222082737/Recent-Bridal-Dress-shoot" },
        { title: "Speed-Ramp", url: "http://behance.net/gallery/230079023/Speed-Ramp" },
        { title: "Woro-Coffee", url: "http://behance.net/gallery/241106317/Woro-Coffee" },
      ],
    },

    {
      id: 2,
      name: "Motion Graphics Intro",
      category: "After Effects",
      img: "/WhatsApp Image 2026-01-11 at 21.44.55.jpeg",
      links: [
        { title: "Khasta Bites", url: "https://www.behance.net/gallery/241106569/Khasta-Bites" },
        { title: "Animated Video", url: "http://behance.net/gallery/232715441/AFTER-EFFECT-REEL" },
      ],
    },

    {
      id: 3,
      name: "Creative Advertising Video",
      category: "Video Editing",
      img: "/WhatsApp Image 2026-01-11 at 21.45.57.jpeg",
      links: [
        { title: "Advertising Campaign", url: "https://www.behance.net/gallery/207554773/Team-Introduction" },
        { title: "Character-introduction", url: "https://www.behance.net/gallery/221345957/character-introduction" },
        { title: "Rooftop-Reel", url: "http://behance.net/gallery/230429809/Rooftop-Reel" },
      ],
    },

    {
      id: 4,
      name: "Event Highlight Reel",
      category: "Video Editing",
      img: "/WhatsApp Image 2026-01-11 at 21.46.16.jpeg",
      links: [
        { title: "Animated-video", url: "https://behance.net/gallery/196970727/Animated-video" },
        { title: "Instagram-Reel", url: "https://www.behance.net/gallery/230428759/Instagram-Reel" },
        { title: "Meta-ads", url: "http://behance.net/gallery/230427369/Meta-ads" },
        { title: "Brands-reels", url: "http://behance.net/gallery/230080665/brands-reels" },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#0b0b0b] text-white px-6 md:px-20 py-24 overflow-hidden font-sans">
      
      {/* top glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#72A9D1]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* heading */}
      <div className="relative text-center mb-16 md:mb-24 py-10">
        <h1 className="absolute inset-0 flex items-center justify-center text-[12vw] md:text-[140px] font-extrabold text-white/5 tracking-widest select-none uppercase whitespace-nowrap">
          Projects
        </h1>
        <div className="relative">
          <h2 className="text-3xl md:text-6xl font-black tracking-tight uppercase">
            My <span className="text-[#72A9D1]">Portfolio</span>
          </h2>
        </div>
      </div>

      {/* project cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#2D4B73] rounded-2xl overflow-hidden border border-[#5E5D6C] transition-all duration-500 hover:border-[#72A9D1]/50 hover:shadow-[0_0_40px_rgba(114,169,209,0.2)]"
          >
            {/* image */}
            <div className="relative w-full h-48 md:h-60 overflow-hidden">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* overlay with multiple links */}
              <div className="absolute inset-0 bg-[#5E5D6C]/60 backdrop-blur-sm flex flex-col items-center justify-start gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-4 md:justify-center md:gap-3 md:py-0
                overflow-y-auto scrollbar-thin scrollbar-thumb-[#72A9D1]/50 scrollbar-track-transparent">
                {project.links.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-3 py-2 md:px-5 md:py-3 bg-[#72A9D1] text-black font-black rounded-full hover:scale-105 transition-transform uppercase text-[10px] md:text-xs"
                  >
                    {item.title}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>

              {/* category tag */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#2D4B73]/70 backdrop-blur-md border border-[#5E5D6C] rounded-lg text-[10px] font-bold text-[#72A9D1] uppercase tracking-widest">
                {project.category}
              </div>
            </div>

            {/* content */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black tracking-tight group-hover:text-[#72A9D1] transition-colors uppercase">
                  {project.name}
                </h3>

                {project.category.includes("Video") ? (
                  <Video size={18} className="text-[#BDBDBD]" />
                ) : (
                  <Palette size={18} className="text-[#BDBDBD]" />
                )}
              </div>
            </div>

            {/* bottom line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#72A9D1] transition-all duration-500 group-hover:w-full shadow-[0_0_10px_#72A9D1]" />
          </div>
        ))}
      </div>

      {/* bottom glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#72A9D1]/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
