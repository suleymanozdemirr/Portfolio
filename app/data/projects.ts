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
]
