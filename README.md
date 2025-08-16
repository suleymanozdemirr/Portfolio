# 🚀 Süleyman Özdemir - Frontend Developer Portfolio

Modern, responsive ve mobil uyumlu kişisel portfolio web sitesi. Next.js 14, TypeScript, Tailwind CSS ve modern web teknolojileri kullanılarak geliştirildi.

## ✨ Özellikler

### 🎨 **Modern Tasarım**
- Glassmorphism efektleri
- Gradient arka planlar
- Smooth animasyonlar
- Hover efektleri

### 📱 **Responsive Tasarım**
- Mobile-first yaklaşım
- Tüm cihazlarda uyumlu
- Touch-friendly butonlar
- Responsive grid sistemi

### 🚀 **Teknolojiler**
- **Frontend**: React 18, Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: React Icons
- **Build Tool**: Vite

## 🛠️ Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar
```bash
# Repository'yi klonlayın
git clone https://github.com/username/portfolio-suleyman.git

# Proje dizinine gidin
cd portfolio-suleyman

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev

# Production build
npm run build

# Production server'ı başlatın
npm start
```

## 📁 Proje Yapısı

```
portfolio-suleyman/
├── app/                    # Next.js 14 app directory
│   ├── data/              # Proje verileri
│   ├── globals.css        # Global CSS
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Ana sayfa
├── public/                 # Statik dosyalar
│   └── images/            # Proje resimleri
├── tailwind.config.js     # Tailwind CSS config
├── next.config.js         # Next.js config
└── package.json           # Proje bağımlılıkları
```

## 🎯 Responsive Breakpoint'ler

- **Mobile**: `< 640px` (1 kolon)
- **Small**: `640px - 768px` (2 kolon)
- **Medium**: `768px - 1024px` (3 kolon)
- **Large**: `1024px - 1280px` (4 kolon)
- **XL**: `> 1280px` (4 kolon)

## 🚀 Deployment

### Vercel (Önerilen)
```bash
# Vercel CLI ile
npm i -g vercel
vercel

# Veya GitHub ile otomatik deploy
```

### Netlify
```bash
# Build dosyalarını yükleyin
npm run build
# .next klasörünü Netlify'a yükleyin
```

## 🔧 Geliştirme

### Script'ler
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint kontrolü
npm run type-check   # TypeScript kontrolü
```

### Yeni Proje Ekleme
`app/data/projects.ts` dosyasına yeni proje ekleyin:

```typescript
{
  name: "Proje Adı",
  description: "Proje açıklaması",
  color: "#hexcode",
  icon: "🎯",
  image: "/images/proje-resmi.jpg",
  link: "https://proje-linki.com"
}
```

## 🎨 Özelleştirme

### Renkler
`tailwind.config.js` dosyasında primary ve dark renk paletlerini değiştirin.

### Fontlar
`app/globals.css` dosyasında Google Fonts import'unu güncelleyin.

### Animasyonlar
CSS keyframes ve Tailwind animasyonlarını `globals.css` dosyasında düzenleyin.

## 📱 Mobil Optimizasyon

- Touch-friendly buton boyutları (44px minimum)
- Safe area desteği
- Responsive typography
- Optimized images
- Lazy loading

## 🔍 SEO & Performance

- Meta tags
- Open Graph
- Structured data
- Image optimization
- Code splitting
- Lazy loading

## 🐛 Sorun Giderme

### Resim Görünmüyor
- Resim yolunun `/images/` ile başladığından emin olun
- `public/images/` klasöründe resmin var olduğunu kontrol edin

### Build Hatası
```bash
npm run type-check  # TypeScript hatalarını kontrol edin
npm run lint        # ESLint hatalarını kontrol edin
```

### Responsive Sorunları
- Tailwind breakpoint'lerini kontrol edin
- CSS'de `sm:`, `md:`, `lg:` prefix'lerini kullanın

## 📄 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

- **Email**: suleyman07ozdemir@gmail.com
- **LinkedIn**: [Süleyman Özdemir](https://www.linkedin.com/in/suleymanozdemir07/)
- **GitHub**: [suleymanozdemirr](https://github.com/suleymanozdemirr)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
