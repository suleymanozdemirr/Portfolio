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
      color: "#4e6e8e",
      icon: <SiReact className="text-3xl" style={{ color: "#61dafb" }} />,
    },
    {
      name: "Next.js",
      color: "#b8b8d1",
      icon: <SiNextdotjs className="text-3xl" style={{ color: "#fff" }} />,
    },
    {
      name: "TypeScript",
      color: "#3a4d6b",
      icon: <SiTypescript className="text-3xl" style={{ color: "#3178c6" }} />,
    },
    {
      name: "Tailwind",
      color: "#4e6e8e",
      icon: <SiTailwindcss className="text-3xl" style={{ color: "#38bdf8" }} />,
    },
    {
      name: "HTML5",
      color: "#a36c6c",
      icon: <SiHtml5 className="text-3xl" style={{ color: "#e34c26" }} />,
    },
    {
      name: "CSS3",
      color: "#4e6e8e",
      icon: <SiCss3 className="text-3xl" style={{ color: "#1572b6" }} />,
    },
    {
      name: "SCSS",
      color: "#a36c8c",
      icon: <SiSass className="text-3xl" style={{ color: "#cd6799" }} />,
    },
    {
      name: "JavaScript",
      color: "#b8b86c",
      icon: <SiJavascript className="text-3xl" style={{ color: "#f7df1e" }} />,
    },
  ]

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        background:
          "radial-gradient(ellipse at top left, #111216 60%, #07080a 100%)",
        fontFamily: "'Inter', sans-serif",
        color: "#d1d5db",
      }}
    >
      {/* Navbar */}
      <nav
        className="w-full max-w-5xl mx-auto flex flex-row items-center justify-between px-6 py-8 text-lg  tracking-wide"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <span className="text-2xl text-[#b8b8d1] drop-shadow-lg select-none">
          SÜLEYMAN ÖZDEMİR
        </span>
        <div className="flex gap-8">
          <a href="#about" className="hover:text-[#b8b8d1] transition">
      About Me
    </a>
          <a href="#experience" className="hover:text-[#b8b8d1] transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-[#b8b8d1] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#b8b8d1] transition">
            Contact
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
            <span className="absolute bottom-2 right-2 bg-[#b8b8d1] text-[#181a20] px-2 py-1 rounded-full text-xs font-bold shadow">
              SULEYMAN
            </span>
          </div>
          {/* Text */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h1
              className="text-4xl font-extrabold text-[#b8b8d1] drop-shadow"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Hi, I'm <span className="text-[#f4f4f8]">Süleyman</span>
            </h1>
            <h2 className="text-xl font-semibold text-[#a3a3c2] flex items-center gap-3">
              Frontend Software Developer
              <span className="bg-[#b8b8d1] text-[#181a20] px-2 py-0.5 rounded-full text-xs font-bold shadow ml-2">
                🚀 Open to new opportunities
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
          className="text-2xl font-extrabold mb-8 tracking-widest text-[#b8b8d1]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          TECH STACK
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

                {/* About Me */}
<section id="about" className="mt-20 w-full flex flex-col items-center">
  <h3
    className="text-2xl font-extrabold mb-8 tracking-widest text-[#b8b8d1]"
    style={{ fontFamily: "'JetBrains Mono', monospace" }}
  >
    ABOUT ME
  </h3>

  <div className="flex flex-col items-center w-full max-w-5xl bg-[#181a20]/70 rounded-3xl shadow-2xl p-10 border border-[#b8b8d1]/10 mx-auto">
    <p className="text-lg text-[#a3a3c2] leading-relaxed text-center max-w-3xl">
      I’m <span className="text-[#b8b8d1] font-semibold">Süleyman</span>, a
      passionate <span className="text-[#b8b8d1] font-semibold">Frontend Developer</span> 
      dedicated to crafting elegant, responsive, and high-performance web applications. 
      My goal is to deliver clean, maintainable code while providing engaging user experiences.
    </p>

    <p className="text-lg text-[#a3a3c2] leading-relaxed text-center max-w-3xl mt-6">
      Skilled in modern tools like <span className="text-[#b8b8d1] font-semibold">React</span>, 
      <span className="text-[#b8b8d1] font-semibold"> Next.js</span>, and 
      <span className="text-[#b8b8d1] font-semibold"> Tailwind CSS</span>, 
      I enjoy turning complex ideas into intuitive, visually appealing solutions.
    </p>

    <p className="text-lg text-[#a3a3c2] leading-relaxed text-center max-w-3xl mt-6">
      I believe in teamwork, continuous learning, and embracing new challenges. 
      Currently, I’m open to exciting opportunities where I can grow and contribute 
      to meaningful projects.
    </p>
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
      className="flex flex-col items-center justify-center rounded-xl shadow-lg hover:scale-105 transition"
      style={{
        background: `linear-gradient(135deg, ${color}22 0%, #181a20 100%)`,
        border: `1.5px solid ${color}`,
        width: 130,
        height: 120,
        minWidth: 130,
        minHeight: 120,
        maxWidth: 130,
        maxHeight: 120,
      }}
    >
      <div className="mb-2">{icon}</div>
      <span
        className="text-lg font-bold"
        style={{ color: color, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {name}
      </span>
    </div>
  )
}
