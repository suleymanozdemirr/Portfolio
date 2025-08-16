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
    image: "/images/maia-website.png",
    link: "https://maiaenerji.com",
  },
  // {
  //   name: "Maia Website",
  //   description: "Modern ve responsive web tasarımı ile geliştirilmiş kurumsal web sitesi. Kullanıcı deneyimi odaklı arayüz tasarımı.",
  //   color: "#38bdf8",
  //   icon: "💻",
  //   image: "/images/maia-website.png",
  //   link: "#",
  // },
  // {
  //   name: "Maia Mobile App",
  //   description: "Mobil uyumlu web uygulaması. Responsive tasarım ve modern teknolojiler ile geliştirilmiş kullanıcı dostu arayüz.",
  //   color: "#10b981",
  //   icon: "📱",
  //   image: "/images/maiaenerji-com-480x800phone-9f6f78.jpg",
  //   link: "#",
  // },
]
