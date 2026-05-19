import type { Metadata } from 'next'
import "highlight.js/styles/vs2015.css"
import './globals.css'
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: 'Alejandro Becerra Guzmán – Desarrollador Full Stack JavaScript',
  description: 'Desarrollador Full Stack JavaScript y Docente con más de 16 años de experiencia. Especializado en Next.js, React, Node.js, PostgreSQL y Tailwind CSS. Disponible para proyectos web en Chile.',
  authors: [{ name: 'Alejandro Becerra Guzmán', url: 'https://www.abecerraguz.com' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': 160 },
  },
  alternates: {
    canonical: 'https://www.abecerraguz.com',
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: 'Alejandro Becerra Guzmán – Desarrollador Full Stack JavaScript',
    description: 'Portafolio profesional de Alejandro Becerra. Proyectos con Next.js, React, Node.js y PostgreSQL. Docente en Duoc UC.',
    url: 'https://www.abecerraguz.com',
    siteName: 'Portafolio Alejandro Becerra Guzmán',
    locale: 'es_CL',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alejandro Becerra Guzmán – Desarrollador Full Stack JavaScript',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandro Becerra Guzmán – Desarrollador Full Stack JavaScript',
    description: 'Portafolio profesional. Proyectos con Next.js, React, Node.js y PostgreSQL. Docente en Duoc UC.',
    images: ['/og-image.jpg'],
    creator: '@abecerraguz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="es"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alejandro Becerra Guzmán",
              url: "https://www.abecerraguz.com",
              image: "https://www.abecerraguz.com/abecerraguz.jpg",
              jobTitle: "Desarrollador Full Stack JavaScript",
              description: "Desarrollador Full Stack JavaScript y Docente con más de 16 años de experiencia en diseño web, desarrollo frontend y backend.",
              knowsAbout: ["JavaScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "UX/UI", "TypeScript", "GraphQL", "WordPress Headless"],
              worksFor: {
                "@type": "Organization",
                name: "Beltra Propiedades S.A."
              },
              alumniOf: [
                { "@type": "EducationalOrganization", name: "Coding Dojo" },
                { "@type": "EducationalOrganization", name: "Universidad José Santos Ossa" }
              ],
              sameAs: [
                "https://github.com/abecerraguz",
                "https://www.linkedin.com/in/abecerraguz"
              ]
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID &&
        process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!}
          />
        )}
      </body>
    </html>
  )
}