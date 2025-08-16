"use client"

import { useState, useEffect } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
} from "react-icons/si"
import { projects } from "./data/projects"
import { CgMail } from "react-icons/cg"
import { HiMenu, HiX } from "react-icons/hi"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Tech stack data
  const techStack = [
    {
      name: "React",
      color: "#61dafb",
      icon: <SiReact className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#61dafb" }} />,
    },
    {
      name: "Next.js",
      color: "#ffffff",
      icon: <SiNextdotjs className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#fff" }} />,
    },
    {
      name: "TypeScript",
      color: "#3178c6",
      icon: <SiTypescript className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#3178c6" }} />,
    },
    {
      name: "Tailwind CSS",
      color: "#38bdf8",
      icon: <SiTailwindcss className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#38bdf8" }} />,
    },
    {
      name: "HTML5",
      color: "#e34c26",
      icon: <SiHtml5 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#e34c26" }} />,
    },
    {
      name: "CSS3",
      color: "#1572b6",
      icon: <SiCss3 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#1572b6" }} />,
    },
    {
      name: "SCSS",
      color: "#cd6799",
      icon: <SiSass className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#cd6799" }} />,
    },
    {
      name: "JavaScript",
      color: "#f7df1e",
      icon: <SiJavascript className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: "#f7df1e" }} />,
    },
  ]

  return (
    <div
      className="min-h-screen flex flex-col items-center pb-20"
      style={{
        background:
          "radial-gradient(ellipse at top left, #111216 60%, #07080a 100%)",
        fontFamily: "'Inter', sans-serif",
        color: "#d1d5db",
      }}
    >
      {/* Navbar */}
      <nav
        className="w-full max-w-5xl mx-auto flex flex-row items-center justify-between px-4 sm:px-6 py-6 sm:py-8 text-lg sm:text-xl tracking-wide relative"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span className="text-xl sm:text-2xl text-[#b8b8d1] drop-shadow-lg select-none">
          SÜLEYMAN ÖZDEMİR
        </span>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          <a
            href="#experience"
            className="relative hover:text-[#b6b6da] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#b6b6da] after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base"
          >
            Deneyim
          </a>
          <a
            href="#projects"
            className="relative hover:text-[#b6b6da] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#b6b6da] after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base"
          >
            Projeler
          </a>
          <a
            href="#footer"
            className="relative hover:text-[#b6b6da] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#b6b6da] after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base"
          >
            İletişim
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-[#b8b8d1] hover:text-[#b6b6da] transition-colors duration-300 p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#181a20]/95 backdrop-blur-md border-b border-[#b8b8d1]/10 lg:hidden z-50">
            <div className="flex flex-col py-4 px-4">
              <a
                href="#experience"
                onClick={closeMobileMenu}
                className="py-3 px-4 text-[#a3a3c2] hover:text-[#b6b6da] transition-colors duration-300 border-b border-[#b8b8d1]/10 last:border-b-0"
              >
                Deneyim
              </a>
              <a
                href="#projects"
                onClick={closeMobileMenu}
                className="py-3 px-4 text-[#a3a3c2] hover:text-[#b6b6da] transition-colors duration-300 border-b border-[#b8b8d1]/10 last:border-b-0"
              >
                Projeler
              </a>
              <a
                href="#footer"
                onClick={closeMobileMenu}
                className="py-3 px-4 text-[#a3a3c2] hover:text-[#b6b6da] transition-colors duration-300 border-b border-[#b8b8d1]/10 last:border-b-0"
              >
                İletişim
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Profile Section - Responsive layout */}
      <section className="flex flex-col items-center mt-4 sm:mt-8 w-full px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 w-full max-w-5xl bg-[#181a20]/70 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-[#b8b8d1]/10 mx-auto">
          {/* Profile Picture */}
          <div className="relative group">
            <div className="rounded-full border-4 border-[#b8b8d1] p-1 w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 bg-[#23232e] flex items-center justify-center shadow-lg transition group-hover:scale-105">
              <span className="text-4xl sm:text-5xl lg:text-6xl text-[#b8b8d1]">👤</span>
            </div>
          </div>
          {/* Text */}
          <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#b8b8d1] drop-shadow"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Merhaba, Ben <span className="text-[#f4f4f8]">Süleyman</span>
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-[#a3a3c2] flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span>Frontend Software Developer</span>
              <span className="bg-[#b8b8d1] text-[#181a20] px-2 py-0.5 rounded-full text-xs font-bold shadow">
                🚀 Yeni fırsatlara açık
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center mt-4 gap-3 sm:gap-5 text-[#a3a3c2]">
              <a
                href="https://www.linkedin.com/in/suleymanozdemir07/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b8b8d1] transition flex items-center gap-1 text-sm sm:text-base"
              >
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="sm:w-6 sm:h-6"
                />
                LinkedIn
              </a>
              <a
                href="https://github.com/suleymanozdemirr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b8b8d1] transition flex items-center gap-1 text-sm sm:text-base"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" className="sm:w-8 sm:h-8">
                  <circle cx="20" cy="20" r="20" fill="#181717" />
                  <path
                    fill="#fff"
                    d="M12 5.3c-3.7 0-6.7 3-6.7 6.7 0 3 2 5.5 4.7 6.4.3.1.4-.1.4-.3v-1.1c-1.9.4-2.3-.8-2.3-.8-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.7 0 1 .7 1 .7.6 1 1.6.7 2 .5.1-.4.2-.7.4-.8-1.5-.2-3-.8-3-3.3 0-.7.2-1.2.6-1.7-.1-.2-.3-.8.1-1.6 0 0 .5-.2 1.7.7.5-.1 1-.2 1.5-.2s1 .1 1.5.2c1.2-.9 1.7-.7 1.7-.7.4.8.2 1.4.1 1.6.4.5.6 1 .6 1.7 0 2.5-1.5 3.1-3 3.3.2.2.4.5.4 1v1.5c0 .2.1.4.4.3 2.7-.9 4.7-3.4 4.7-6.4 0-3.7-3-6.7-6.7-6.7z"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-16 sm:mt-20 w-full flex flex-col items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
        <h3
          className="text-xl sm:text-2xl font-extrabold mb-6 sm:mb-8 tracking-widest text-[#fff]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          YETENEKLER
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-7 w-full">
          {techStack.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              color={tech.color}
              icon={tech.icon}
            />
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section
        id="experience"
        className="mt-16 sm:mt-20 w-full flex flex-col items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-20"
      >
        <h3
          className="text-xl sm:text-2xl font-extrabold mb-6 sm:mb-8 tracking-widest text-[#fff]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          DENEYİM
        </h3>

        <div className="max-w-4xl w-full px-2">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Tarih */}
            <div className="min-w-[100px] text-[#a3a3c2] font-medium text-sm sm:text-base">
              2023 - 2024
            </div>

            {/* İçerik */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#fff]">
                Frontend Developer - React.js
              </h4>
              <p className="text-[#a3a3c2] mb-3 sm:mb-4 text-sm sm:text-base">
                Morphosium Software · Antalya
              </p>

              {/* Aşama Listesi */}
              <ul className="list-disc list-inside text-[#d1d5db] space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                <li>
                  Redux ve Rest API ve Next.js gibi teknolojileri kullanarak
                  uygulamalar geliştirmek
                </li>
                <li>Git ve Github repositories kullanımı</li>
                <li>Test senaryoları çalıştırma ve hata ayıklama deneyimi</li>
                <li>
                  Web uygulamalarını tasarlamak, geliştirmek ve sürdürmek için
                  geliştirme ekibiyle işbirliği yaparken, belirlenen
                  gereksinimleri analiz edip, kullanıcı odaklı bir yaklaşımla
                  uygun teknolojileri seçmek ve sürekli iletişim halinde kalarak
                  proje sürecini verimli bir şekilde yönetmek
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="mt-16 sm:mt-20 w-full flex flex-col items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-20"
      >
        <h3
          className="text-xl sm:text-2xl font-extrabold mb-6 sm:mb-8 tracking-widest text-[#fff]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          PROJELER
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full justify-items-start">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              color={project.color}
              icon={project.icon}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <footer
        id="footer"
        className="mt-16 sm:mt-20 w-full py-6 border-t border-[#b8b8d1]/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-sm text-[#a3a3c2]">
          <span className="text-center sm:text-left">
            © {new Date().getFullYear()} Süleyman Özdemir — Tüm Hakları
            Saklıdır.
          </span>
          <a
            href="mailto:suleyman07ozdemir@gmail.com"
            className="flex items-center gap-2 text-[#a3a3c2] font-bold hover:underline transition text-center"
          >
            <CgMail className="text-lg" />
            <span className="hidden sm:inline">suleyman07ozdemir@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-[#b8b8d1] text-[#181a20] p-2 sm:p-3 rounded-full shadow-lg hover:bg-[#a3a3c2] transition z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

function TechCard({
  name,
  color,
  icon,
}: {
  name: string
  color: string
  icon: React.ReactNode
}) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-xl shadow-lg hover:scale-105 transition transform hover:shadow-2xl p-2 sm:p-3"
      style={{
        background: `linear-gradient(135deg, ${color}33 0%, #181a20 100%)`,
        border: `2px solid ${color}`,
        minHeight: 80,
        maxHeight: 120,
      }}
    >
      <div className="mb-2 drop-shadow-lg transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span
        className="text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300 group-hover:text-white text-center"
        style={{ color: color, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {name}
      </span>
    </div>
  )
}

function ProjectCard({
  name,
  description,
  color,
  icon,
  image,
  link,
}: {
  name: string
  description: string
  color: string
  icon: string
  image: string
  link: string
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-2xl shadow-lg hover:scale-105 transition overflow-hidden w-full h-full"
      style={{
        background: `linear-gradient(135deg, ${color}15 0%, #181a20 100%)`,
        border: `1.5px solid ${color}`,
        minHeight: 320,
        textDecoration: "none",
      }}
    >
      {/* Image */}
      <div className="h-32 sm:h-40 w-full overflow-hidden bg-[#23232e] flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl">${icon}</div>`;
            }
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-3 sm:p-4">
        <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
        <h4
          className="text-lg sm:text-xl font-bold mb-1"
          style={{ color: color, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {name}
        </h4>
        <p className="text-xs sm:text-sm text-[#a3a3c2]">{description}</p>
      </div>
    </a>
  )
}
