"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import Image from "next/image"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiLinkedin,
  SiGithub,
} from "react-icons/si"
import { projects } from "./data/projects"
import { CgMail } from "react-icons/cg"
import { HiMenu, HiX, HiDownload } from "react-icons/hi"
import ProjectCard from './components/ProjectCard'
import TechCard from './components/TechCard'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Memoize scroll handler for better performance
  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 400)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Memoize tech stack data to prevent unnecessary re-renders
  const techStack = useMemo(() => [
    {
      name: "React",
      color: "#61dafb",
      icon: <SiReact className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#61dafb" }} />,
    },
    {
      name: "Next.js",
      color: "#ffffff",
      icon: <SiNextdotjs className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#fff" }} />,
    },
    {
      name: "TypeScript",
      color: "#3178c6",
      icon: <SiTypescript className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#3178c6" }} />,
    },
    {
      name: "Tailwind CSS",
      color: "#38bdf8",
      icon: <SiTailwindcss className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#38bdf8" }} />,
    },
    {
      name: "HTML5",
      color: "#e34c26",
      icon: <SiHtml5 className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#e34c26" }} />,
    },
    {
      name: "CSS3",
      color: "#1572b6",
      icon: <SiCss3 className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#1572b6" }} />,
    },
    {
      name: "SCSS",
      color: "#cd6799",
      icon: <SiSass className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#cd6799" }} />,
    },
    {
      name: "JavaScript",
      color: "#f7df1e",
      icon: <SiJavascript className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#f7df1e" }} />,
    },
  ], [])

  // Memoize mobile menu toggle handler
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  // Memoize scroll to top handler
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

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
        <div className="hidden md:flex gap-6 lg:gap-8">
          <a
            href="#experience"
            className="relative hover:text-[#b6b6da] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#b6b6da] after:transition-all after:duration-300 hover:after:w-full"
          >
            Deneyim
          </a>
          <a
            href="#projects"
            className="relative hover:text-[#b6b6da] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#b6b6da] after:transition-all after:duration-300 hover:after:w-full"
          >
            Projeler
          </a>
          <a
            href="#footer"
            className="relative hover:text-[#b6b6da] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#b6b6da] after:transition-all after:duration-300 hover:after:w-full"
          >
            İletişim
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#b8b8d1] hover:text-[#b6b6da] transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#181a20]/95 backdrop-blur-md border-b border-[#b8b8d1]/10 md:hidden z-50">
            <div className="flex flex-col px-4 py-4 space-y-4">
              <a
                href="#experience"
                className="text-[#b8b8d1] hover:text-[#b6b6da] transition-colors py-2 border-b border-[#b8b8d1]/20"
                onClick={toggleMobileMenu}
              >
                Deneyim
              </a>
              <a
                href="#projects"
                className="text-[#b8b8d1] hover:text-[#b6b6da] transition-colors py-2 border-b border-[#b8b8d1]/20"
                onClick={toggleMobileMenu}
              >
                Projeler
              </a>
              <a
                href="#footer"
                className="text-[#b8b8d1] hover:text-[#b6b6da] transition-colors py-2"
                onClick={toggleMobileMenu}
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
            <div className="relative rounded-full border-4 border-[#b8b8d1] p-1 w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 bg-[#23232e] shadow-lg transition group-hover:scale-105 overflow-hidden">
              <Image
                src="/me.jpg"
                alt="Süleyman Özdemir profil fotoğrafı"
                fill
                sizes="(min-width: 1024px) 11rem, (min-width: 640px) 10rem, 8rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left">
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#b8b8d1] drop-shadow"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Merhaba, Ben <span className="text-[#f4f4f8]">Süleyman</span>
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-[#a3a3c2] flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              Frontend Software Developer
            </h2>
            
            <div className="flex w-full items-center mt-4 text-[#a3a3c2] justify-between">
              <div className="flex items-center gap-3 sm:gap-5">
                <a
                  href="https://www.linkedin.com/in/suleymanozdemir07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm sm:text-base
                             text-[#d1d5db] hover:text-white transition-colors bg-[#1f222a] hover:bg-[#272b35] border border-[#b8b8d1]/10"
                  aria-label="LinkedIn profili"
                >
                  <SiLinkedin className="text-lg sm:text-xl" style={{ color: "#0a66c2" }} />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/suleymanozdemirr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm sm:text-base
                             text-[#d1d5db] hover:text-white transition-colors bg-[#1f222a] hover:bg-[#272b35] border border-[#b8b8d1]/10"
                  aria-label="GitHub profili"
                >
                  <SiGithub className="text-lg sm:text-xl" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
              <a
                href="/Süleyman_Özdemir-Özgeçmiş.pdf"
                download
                className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-bold
                           bg-gradient-to-r from-[#c4c4de] via-[#b8b8d1] to-[#a8a8c9]
                           text-[#181a20] shadow-lg hover:shadow-xl transition-all duration-200
                           hover:from-[#d5d5ea] hover:to-[#b6b6da]
                           focus:outline-none focus:ring-2 focus:ring-[#b8b8d1]/60 focus:ring-offset-2 focus:ring-offset-[#181a20]"
                aria-label="CV / Özgeçmiş indir"
              >
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
                <HiDownload className="text-sm sm:text-base" />
                <span>CV / Özgeçmiş</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-16 sm:mt-20 w-full flex flex-col items-start max-w-6xl mx-auto px-4 sm:px-8 lg:px-20">
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
        className="mt-16 sm:mt-20 w-full flex flex-col items-start max-w-6xl mx-auto px-4 sm:px-8 lg:px-20"
      >
        <h3
          className="text-xl sm:text-2xl font-extrabold mb-6 sm:mb-8 tracking-widest text-[#fff]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          DENEYİM
        </h3>

        <div className="max-w-4xl w-full px-2">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-6">
            {/* Tarih */}
            <div className="w-28 md:w-36 lg:w-40 shrink-0 text-[#a3a3c2] font-medium text-sm sm:text-base md:text-right leading-5">
              <div>2024 – 2025</div>
              <div className="text-xs sm:text-sm text-[#a3a3c2]/60 font-normal leading-tight">Ekim – Ağustos</div>
            </div>

            {/* İçerik */}
            <div className="relative flex-1 pl-4 border-l-2 border-[#b8b8d1]/20">
              <h4 className="text-base sm:text-lg font-bold text-[#fff]">
                Yazılım Mühendisi
              </h4>
              <p className="text-[#a3a3c2] mb-3 sm:mb-4 text-sm sm:text-base">
                Maia Mühendislik Enerji · Antalya
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs bg-[#b8b8d1]/10 border border-[#b8b8d1]/20 text-[#cfd2e3]">React</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs bg-[#b8b8d1]/10 border border-[#b8b8d1]/20 text-[#cfd2e3]">Next.js</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs bg-[#b8b8d1]/10 border border-[#b8b8d1]/20 text-[#cfd2e3]">TypeScript</span>
              </div>

              <ul className="list-disc list-inside text-[#d1d5db] space-y-2 text-xs sm:text-sm md:text-base">
                <li>Enerji sektöründeki projeler için yazılım çözümleri geliştirme ve teknik destek sağlama</li>
                <li>Şirket içi iş süreçlerini dijitalleştirmek ve verimliliği artırmak için yazılım uygulamaları üzerinde çalışma</li>
                <li>Web tabanlı uygulamalar (React, Next.js, TypeScript) geliştirme ve bakım</li>
                <li>Enerji projelerinin teknik verilerini analiz ederek raporlama ve takip sistemleri oluşturma</li>
                <li>Ekip içi proje yönetimi süreçlerine yazılım mühendisi bakış açısıyla katkı sağlama</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
            {/* Tarih */}
            <div className="w-28 md:w-36 lg:w-40 shrink-0 text-[#a3a3c2] font-medium text-sm sm:text-base md:text-right">
              <div>2023 - 2024</div>
              <div className="text-xs sm:text-sm text-[#a3a3c2]/60 font-normal leading-tight">Eylül – Ekim</div>
            </div>

            {/* İçerik */}
            <div className="relative flex-1 pl-4 border-l-2 border-[#b8b8d1]/20">
              <h4 className="text-base sm:text-lg font-bold text-[#fff]">
                Frontend Developer - React.js
              </h4>
              <p className="text-[#a3a3c2] mb-3 sm:mb-4 text-sm sm:text-base">
                Morphosium Software · Antalya
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs bg-[#b8b8d1]/10 border border-[#b8b8d1]/20 text-[#cfd2e3]">React</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs bg-[#b8b8d1]/10 border border-[#b8b8d1]/20 text-[#cfd2e3]">Next.js</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs bg-[#b8b8d1]/10 border border-[#b8b8d1]/20 text-[#cfd2e3]">Redux</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs bg-[#b8b8d1]/10 border border-[#b8b8d1]/20 text-[#cfd2e3]">REST API</span>
              </div>

              {/* Aşama Listesi */}
              <ul className="list-disc list-inside text-[#d1d5db] space-y-2 text-xs sm:text-sm md:text-base">
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
        className="mt-16 sm:mt-20 w-full flex flex-col items-center max-w-6xl mx-auto px-4 sm:px-8 lg:px-20"
      >
        <h3
          className="text-xl sm:text-2xl font-extrabold mb-8 sm:mb-12 tracking-widest text-[#fff] w-full text-left"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          PROJELER
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#a3a3c2]">
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
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-[#b8b8d1] text-[#181a20] p-2 sm:p-3 rounded-full shadow-lg hover:bg-[#a3a3c2] transition z-50 touch-button"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}
