"use client"

import React, { useState } from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  name: string
  description: string
  color: string
  icon: string
  image: string
  link: string
}

export default function ProjectCard({ name, description, color, icon, image, link }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden h-full group project-card-3 min-w-[320px] sm:min-w-[350px] lg:min-w-[380px] gpu-accelerated optimize-render"
      style={{
        background: `linear-gradient(135deg, ${color}15 0%, #181a20 100%)`,
        border: `1.5px solid ${color}`,
        textDecoration: "none",
      }}
    >
      {/* Image Container */}
      <div className="h-36 sm:h-40 w-full overflow-hidden bg-[#23232e] relative project-image-3">
        {imageLoading && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#23232e] to-[#2a2a35] flex items-center justify-center">
            <div className="animate-pulse text-2xl text-[#b8b8d1]">📷</div>
          </div>
        )}
        
        {!imageError ? (
          <Image
            src={image}
            alt={name}
            width={400}
            height={200}
            className={`w-full h-full object-cover object-center transition-all duration-300 ${
              imageLoading ? 'opacity-0' : 'opacity-100 group-hover:scale-110'
            }`}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageError(true)
              setImageLoading(false)
            }}
            priority={false}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#23232e] to-[#2a2a35]">
            <div className="text-3xl sm:text-4xl opacity-60">{icon}</div>
          </div>
        )}
        
        {/* Image overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
        
        {/* Project type badge */}
        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-3 sm:p-4 project-content-3">
        <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
        <h4
          className="text-lg sm:text-xl font-bold mb-2"
          style={{ color: color, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {name}
        </h4>
        <p className="text-sm sm:text-base text-[#a3a3c2] flex-grow leading-relaxed mb-3">{description}</p>
        
        {/* View Project Button */}
        <div className="pt-2 border-t border-[#b8b8d1]/20">
          <span className="text-sm text-[#b8b8d1] font-medium hover:text-[#f4f4f8] transition-colors flex items-center gap-2">
            Projeyi Görüntüle 
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </div>
      </div>
    </a>
  )
}
