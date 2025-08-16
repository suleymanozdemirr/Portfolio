import React from 'react'

interface TechCardProps {
  name: string
  color: string
  icon: React.ReactNode
}

export default function TechCard({ name, color, icon }: TechCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-xl shadow-lg hover:scale-105 transition transform hover:shadow-2xl p-3 sm:p-4 gpu-accelerated optimize-render"
      style={{
        background: `linear-gradient(135deg, ${color}33 0%, #181a20 100%)`,
        border: `2px solid ${color}`,
        minHeight: 80,
        minWidth: 80,
      }}
    >
      <div className="mb-2 text-2xl sm:text-3xl drop-shadow-lg transition-all duration-300 group-hover:scale-110 gpu-accelerated">
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
