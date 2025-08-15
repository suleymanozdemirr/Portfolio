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
    name: "Anime Takip Uygulaması",
    description: "React Native ile anime takip uygulaması. Favori animelerini takip et, yeni bölümlerden haberdar ol.",
    color: "#4e6e8e",
    icon: "📱",
    image: "/images/anime-app.png", // public/images içine ekle
    link: "https://example.com/anime-app",
  },
  {
    name: "Kişisel Portfolio",
    description: "Next.js ve Tailwind CSS ile modern, responsive kişisel web sitesi.",
    color: "#a36c8c",
    icon: "💻",
    image: "/images/portfolio.png",
    link: "https://suleymanozdemir.vercel.app",
  },
  {
    name: "E-Ticaret Sitesi",
    description: "React.js ile kullanıcı dostu, hızlı ve güvenli e-ticaret platformu.",
    color: "#b8b86c",
    icon: "🛒",
    image: "/images/e-commerce.png",
    link: "https://example.com/e-commerce",
  },
]
