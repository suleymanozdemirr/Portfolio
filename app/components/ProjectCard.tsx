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
      className="flex flex-col rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden h-full group bg-[#181a20] border border-[#b8b8d1]/20 hover:border-[#b8b8d1]/40"
      style={{
        textDecoration: "none",
      }}
    >
      {/* Image Container */}
      <div className="h-32 w-full overflow-hidden bg-[#23232e] relative">
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
            height={160}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`w-full h-full object-cover object-center transition-all duration-300 ${
              imageLoading ? 'opacity-0' : 'opacity-100 group-hover:scale-110'
            }`}
            onLoadingComplete={() => setImageLoading(false)}
            onError={() => {
              setImageError(true)
              setImageLoading(false)
            }}
            priority={false}
            loading="lazy"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#23232e] to-[#2a2a35]">
            <div className="text-3xl opacity-60">{icon}</div>
          </div>
        )}
        
        {/* Image overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
        
        {/* Project type badge */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4 sm:p-5">
        <h4
          className="text-lg sm:text-xl font-bold mb-3 text-[#f4f4f8]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {name}
        </h4>
        <p className="text-sm sm:text-base text-[#a3a3c2] flex-grow leading-relaxed mb-4">{description}</p>
        
        {/* View Project Button */}
        <div className="pt-3 border-t border-[#b8b8d1]/20">
          <span className="text-sm text-[#b8b8d1] font-medium hover:text-[#f4f4f8] transition-colors flex items-center gap-2">
            Projeyi Görüntüle 
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </div>
      </div>
    </a>
  )
}
