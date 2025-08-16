// src/data/projects.ts
export interface Project {
  name: string
  description: string
  color: string
  icon: string
  image: string
  link: string
}

export const projects: Project[] = [
  {
    name: "Maia Mühendislik Enerji",
    description:
      "Maia Mühendislik Enerji için kurumsal web sitesi tasarımı ve geliştirmesi. Modern arayüz, mobil uyumlu yapı ve SEO optimizasyonu ile tamamlandı.",
    color: "#4e6e8e",
    icon: "🌐",
    image: "/images/maiaenerji.png",
    link: "https://maiaenerji.com",
  },
  // {
  //   name: "Maia Website",
  //   description: "Maia Mühendislik için geliştirilmiş modern ve responsive web sitesi. Tailwind CSS ve Next.js teknolojileri kullanılarak oluşturuldu.",
  //   color: "#3b82f6",
  //   icon: "💻",
  //   image: "/images/maiaenerji.png",
  //   link: "https://maiaenerji.com",
  // },
  // {
  //   name: "Kişisel Portfolio",
  //   description: "Next.js ve Tailwind CSS ile modern, responsive kişisel web sitesi. TypeScript ve modern web teknolojileri kullanılarak geliştirildi.",
  //   color: "#a36c8c",
  //   icon: "🎨",
  //   image: "/images/maiaenerji.png",
  //   link: "#",
  // },
]
