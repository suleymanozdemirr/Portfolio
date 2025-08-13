import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Süleyman Özdemir - Frontend Developer Portfolio',
  description: 'Frontend geliştirici | React.js, Tailwind CSS, TypeScript uzmanı. Modern ve kullanıcı dostu arayüzler tasarlayan bir frontend geliştirici.',
  keywords: ['Frontend Developer', 'React.js', 'TypeScript', 'Tailwind CSS', 'Portfolio'],
  authors: [{ name: 'Süleyman Özdemir' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
