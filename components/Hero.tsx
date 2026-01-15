"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const roles = ["Video Editor", "Graphic Designer", "Digital Marketer"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((p) => (p + 1) % roles.length);
    }, 2200);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0b0b0b] overflow-hidden">

      {/* LEFT BG — DESKTOP ONLY */}
      <div className="absolute left-0 top-0 h-full w-[30%] bg-[#5E5D6C] rounded-r-[140px] hidden md:block" />

      <div className="relative z-10 min-h-screen flex items-start md:items-center px-6 md:px-20 pt-28 md:pt-0">

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[420px_1fr] gap-10 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center md:-ml-16 mt-10 md:mt-0"
          >
            <div className="relative w-[240px] h-[330px] md:w-[360px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/pic.jpg" 
                alt="Muhammad Hammad"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="text-white text-center md:text-left"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-2xl md:text-3xl mb-3"
            >
              Hi! I’m
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-6xl xl:text-7xl font-extrabold mb-4"
            >
              <span className="text-[#72A9D1]">— Muhammad</span> Hammad
            </motion.h1>

            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-xl md:text-3xl font-bold mb-6"
            >
              I am a{" "}
              <span
                key={index}
                className="text-[#72A9D1] inline-block transition-all duration-500 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
              >
                {roles[index]}
              </span>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-base md:text-lg text-gray-300 max-w-xl mb-10 mx-auto md:mx-0"
            >
              I’m Muhammad Hammad, a creative professional passionate about
              crafting engaging videos, stunning graphics, and impactful digital marketing campaigns.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href="/about"
                className="
                  inline-flex
                  justify-center
                  items-center
                  gap-3
                  px-10
                  py-4
                  rounded-full
                  border-2
                  border-[#72A9D1]
                  text-[#72A9D1]
                  text-base md:text-lg
                  font-semibold
                  transition
                  w-full md:w-auto
                  hover:bg-[#72A9D1]
                  hover:text-[#2D4B73]
                "
              >
                More About Me
                <span className="text-xl">→</span>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
