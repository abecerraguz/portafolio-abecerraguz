import type { Metadata } from 'next'
// import "highlight.js/styles/github.css"; // puedes elegir otro estilo si quieres
// import "highlight.js/styles/monokai.css";
import "highlight.js/styles/vs2015.css"

import './globals.css'

// import { Inter } from 'next/font/google'

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
//   weight: ['300', '400', '500', '600', '700', '800']
// })

export const metadata: Metadata = {
  title: 'Alejandro Becerra Guzmán – Portafolio Web',
  description: 'Desarrollador Fullstack especializado en Next.js, React, PostgreSQL, Tailwind y más.',
  icons: {
    icon: "/favicon.svg",
  },
  generator: 'NextJS 15.2.4',
  openGraph: {
    title: 'Alejandro Becerra Guzmán – Portafolio',
    description: 'Portafolio profesional de Alejandro Becerra. Conoce mis proyectos y habilidades.',
    url: 'https://www.abecerraguz.com',
    siteName: 'Portafolio Alejandro Becerra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alejandro Becerra Guzmán – Desarrollador Fullstack',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandro Becerra Guzmán – Portafolio',
    description: 'Explora mis proyectos y experiencia como desarrollador fullstack.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alejandro Becerra Guzmán",
              url: "https://www.abecerraguz.com",
              jobTitle: "Diseñador UX/UI Desarrollador Fullstack",
              sameAs: [
                "https://github.com/abecerraguz",
                "https://www.linkedin.com/in/abecerraguz" 
              ]
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}