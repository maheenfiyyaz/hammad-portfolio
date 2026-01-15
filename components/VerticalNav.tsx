"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function VerticalNav() {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { href: "/", icon: Home },
    { href: "/about", icon: User },
    { href: "/skills", icon: Code },
    { href: "/portfolio", icon: Briefcase },
    { href: "/contact", icon: Mail },
  ];

  // 🔥 HIDE NAV ON SCROLL DOWN
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* ===== DESKTOP RIGHT NAV ===== */}
      <nav className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <ul className="flex flex-col gap-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`w-12 h-12 flex items-center justify-center rounded-full
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-br from-[#72A9D1] to-[#2D4B73] text-white scale-110 shadow-lg shadow-[#72A9D1]/40"
                        : "bg-white/10 text-[#E0F7FF] hover:bg-gradient-to-br hover:from-[#72A9D1] hover:to-[#2D4B73] hover:text-white"
                    }`}
                >
                  <Icon size={20} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ===== MOBILE BOTTOM NAV (AUTO HIDE) ===== */}
      <nav
        className={`
          md:hidden fixed left-1/2 -translate-x-1/2 z-50
          transition-all duration-300
          ${showNav ? "bottom-4 opacity-100" : "-bottom-24 opacity-0"}
        `}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="flex gap-4 bg-[#333333]/70 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`w-11 h-11 flex items-center justify-center rounded-full
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-br from-[#72A9D1] to-[#2D4B73] text-white scale-110 shadow-lg shadow-[#72A9D1]/40"
                        : "bg-white/10 text-[#E0F7FF] hover:bg-gradient-to-br hover:from-[#72A9D1] hover:to-[#2D4B73] hover:text-white"
                    }`}
                >
                  <Icon size={18} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}   