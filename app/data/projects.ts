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
    image: "/public/images/maiaenerji.png", // kendi görselini buraya koy
    link: "https://maiaenerji.com", // varsa gerçek site linki
  },

  // {
  //   name: "Kişisel Portfolio",
  //   description: "Next.js ve Tailwind CSS ile modern, responsive kişisel web sitesi.",
  //   color: "#a36c8c",
  //   icon: "💻",
  //   image: "/images/portfolio.png",
  //   link: "https://suleymanozdemir.vercel.app",
  // },
  // {
  //   name: "E-Ticaret Sitesi",
  //   description: "React.js ile kullanıcı dostu, hızlı ve güvenli e-ticaret platformu.",
  //   color: "#b8b86c",
  //   icon: "🛒",
  //   image: "/images/e-commerce.png",
  //   link: "https://example.com/e-commerce",
  // },
]
