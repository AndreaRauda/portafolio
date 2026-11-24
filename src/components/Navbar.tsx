
"use client";

import { translations, type Language } from "@/data/translations";

interface NavbarProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const t = translations[language];

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#34465A]/70 bg-[#101C2C]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-2xl font-black tracking-tight text-white">
          AR<span className="text-[#35D6C0]">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-[#AAB8C8] transition hover:text-[#35D6C0]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center rounded-full border border-[#40566C] p-1">
          <button
            onClick={() => setLanguage("es")}
            className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
              language === "es"
                ? "bg-[#35D6C0] text-[#102331]"
                : "text-[#AAB8C8] hover:text-white"
            }`}
          >
            ES
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
              language === "en"
                ? "bg-[#35D6C0] text-[#102331]"
                : "text-[#AAB8C8] hover:text-white"
            }`}
          >
            EN
          </button>
        </div>
      </nav>

      <div className="flex gap-6 overflow-x-auto border-t border-[#34465A]/50 px-5 py-3 lg:hidden">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 text-xs text-[#AAB8C8] hover:text-[#35D6C0]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
