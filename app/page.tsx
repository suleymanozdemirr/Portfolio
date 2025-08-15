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


export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Tech stack data
  const techStack = [
  {
    name: "React",
    color: "#61dafb",
    icon: <SiReact className="text-5xl" style={{ color: "#61dafb" }} />,
  },
  {
    name: "Next.js",
    color: "#ffffff",
    icon: <SiNextdotjs className="text-5xl" style={{ color: "#fff" }} />,
  },
  {
    name: "TypeScript",
    color: "#3178c6",
    icon: <SiTypescript className="text-5xl" style={{ color: "#3178c6" }} />,
  },
  {
    name: "Tailwind CSS",
    color: "#38bdf8",
    icon: <SiTailwindcss className="text-5xl" style={{ color: "#38bdf8" }} />,
  },
  {
    name: "HTML5",
    color: "#e34c26",
    icon: <SiHtml5 className="text-5xl" style={{ color: "#e34c26" }} />,
  },
  {
    name: "CSS3",
    color: "#1572b6",
    icon: <SiCss3 className="text-5xl" style={{ color: "#1572b6" }} />,
  },
  {
    name: "SCSS",
    color: "#cd6799",
    icon: <SiSass className="text-5xl" style={{ color: "#cd6799" }} />,
  },
  {
    name: "JavaScript",
    color: "#f7df1e",
    icon: <SiJavascript className="text-5xl" style={{ color: "#f7df1e" }} />,
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
        className="w-full max-w-5xl mx-auto flex flex-row items-center justify-between px-6 py-8 text-xl  tracking-wide"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span className="text-2xl text-[#b8b8d1] drop-shadow-lg select-none">
          SÜLEYMAN ÖZDEMİR
        </span>
        <div className="flex gap-8">
          <a href="#experience" className="hover:text-[#f59e0b] transition">
            Deneyim
          </a>
          <a href="#projects" className="hover:text-[#f59e0b] transition">
            Projeler
          </a>
          <a href="#contact" className="hover:text-[#f59e0b] transition">
            İletişim
          </a>
        </div>
      </nav>

      {/* Profile Section - Side by side */}
      <section className="flex flex-col items-center mt-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-20 w-full max-w-5xl bg-[#181a20]/70 rounded-3xl shadow-2xl p-10 border border-[#b8b8d1]/10 mx-auto">
          {/* Profile Picture */}
          <div className="relative group">
            <div className="rounded-full border-4 border-[#b8b8d1] p-1 w-44 h-44 bg-[#23232e] flex items-center justify-center shadow-lg transition group-hover:scale-105">
              {/* <img src="/profile.jpg" alt="profile" className="rounded-full w-full h-full object-cover" /> */}
              <span className="text-6xl text-[#b8b8d1]">👤</span>
            </div>
            {/* <span className="absolute bottom-2 right-2 bg-[#b8b8d1] text-[#181a20] px-2 py-1 rounded-full text-xs font-bold shadow">
              SULEYMAN
            </span> */}
          </div>
          {/* Text */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h1
              className="text-4xl font-extrabold text-[#b8b8d1] drop-shadow"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Merhaba, Ben <span className="text-[#f4f4f8]">Süleyman</span>
            </h1>
            <h2 className="text-xl font-semibold text-[#a3a3c2] flex items-center gap-3">
              Frontend Software Developer
              <span className="bg-[#b8b8d1] text-[#181a20] px-2 py-0.5 rounded-full text-xs font-bold shadow ml-2">
                🚀 Yeni fırsatlara açık
              </span>
            </h2>
            {/* <div className="flex items-center mt-2">
              <span className="bg-[#b8b8d1] text-[#181a20] px-4 py-1 rounded-full text-sm font-bold shadow">
                🚀 Open to new opportunities
              </span>
            </div> */}
            <div className="flex items-center mt-4 gap-5 text-[#a3a3c2]">
              <a
                href="https://www.linkedin.com/in/suleymanozdemir07/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b8b8d1] transition flex items-center gap-1"
              >
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={25}
                  height={25}
                />
                LinkedIn
              </a>
              <a
                href="https://github.com/suleymanozdemirr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b8b8d1]  transition flex items-center gap-1"
              >
                {/* GitHub Color Icon */}
                <svg width="32" height="32" viewBox="0 0 24 24">
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
      <section className="mt-20 w-full flex flex-col items-center">
        <h3
          className="text-2xl font-extrabold mb-8 tracking-widest text-[#fff]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          YETENEKLER
        </h3>
        <div className="flex flex-wrap justify-center gap-7 max-w-3xl">
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
  className="mt-20 w-full flex flex-col items-center"
>
  <h3
    className="text-2xl font-extrabold mb-8 tracking-widest text-[#fff]"
    style={{ fontFamily: "'JetBrains Mono', monospace" }}
  >
    DENEYİM
  </h3>

  <div className="max-w-4xl w-full px-6">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Tarih */}
      <div className="min-w-[150px] text-[#a3a3c2] font-medium">
        2023 - 2024
      </div>

      {/* İçerik */}
      <div>
        <h4 className="text-lg font-bold text-[#fff]">
          Frontend Developer - React.js
        </h4>
        <p className="text-[#a3a3c2] mb-4">
          Morphosium Software · Antalya
        </p>

        {/* Aşama Listesi */}
        <ul className="list-disc list-inside text-[#d1d5db] space-y-2 text-sm md:text-base">
          <li>Redux ve Rest API ve Next.js gibi teknolojileri kullanarak uygulamalar geliştirmek</li>
          <li>Git ve Github repositories kullanımı</li>
          <li>Test senaryoları çalıştırma ve hata ayıklama deneyimi</li>
          <li>Web uygulamalarını tasarlamak, geliştirmek ve sürdürmek için geliştirme ekibiyle işbirliği yaparken, belirlenen gereksinimleri analiz edip, kullanıcı odaklı bir yaklaşımla uygun teknolojileri seçmek ve sürekli iletişim halinde kalarak proje sürecini verimli bir şekilde yönetmek</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Projects Section */}
<section id="projects" className="mt-20 w-full flex flex-col items-center">
  <h3
    className="text-2xl font-extrabold mb-8 tracking-widest text-[#fff]"
    style={{ fontFamily: "'JetBrains Mono', monospace" }}
  >
    PROJELER
  </h3>
  <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
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


      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-[#b8b8d1] text-[#181a20] p-3 rounded-full shadow-lg hover:bg-[#a3a3c2] transition"
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
      className="flex flex-col items-center justify-center rounded-xl shadow-lg hover:scale-110 transition transform hover:shadow-2xl"
      style={{
        background: `linear-gradient(135deg, ${color}33 0%, #181a20 100%)`,
        border: `2px solid ${color}`,
        width: 140,
        height: 140,
        minWidth: 140,
        minHeight: 140,
        maxWidth: 140,
        maxHeight: 140,
      }}
    >
      <div className="mb-3 text-5xl drop-shadow-lg transition-all duration-300 group-hover:scale-125">
        {icon}
      </div>
      <span
        className="text-lg font-bold tracking-wide transition-colors duration-300 group-hover:text-white"
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
      className="flex flex-col rounded-2xl shadow-lg hover:scale-105 transition overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${color}15 0%, #181a20 100%)`,
        border: `1.5px solid ${color}`,
        width: 300,
        height: 350,
        textDecoration: "none",
      }}
    >
      {/* Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <div className="text-3xl mb-2">{icon}</div>
        <h4
          className="text-xl font-bold mb-1"
          style={{ color: color, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {name}
        </h4>
        <p className="text-sm text-[#a3a3c2]">{description}</p>
      </div>
    </a>
  )
}

