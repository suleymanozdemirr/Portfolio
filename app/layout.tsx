import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Süleyman Özdemir - Frontend Developer Portfolio',
  description: 'Frontend geliştirici | React.js, Tailwind CSS, TypeScript uzmanı. Modern ve kullanıcı dostu arayüzler tasarlayan bir frontend geliştirici.',
  keywords: ['Frontend Developer', 'React.js', 'TypeScript', 'Tailwind CSS', 'Portfolio'],
  authors: [{ name: 'Süleyman Özdemir' }],
  openGraph: {
    title: 'Süleyman Özdemir - Frontend Developer Portfolio',
    description: 'Modern ve responsive frontend developer portfolio',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Süleyman Özdemir - Frontend Developer Portfolio',
    description: 'Modern ve responsive frontend developer portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#111216',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="bg-white text-gray-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
