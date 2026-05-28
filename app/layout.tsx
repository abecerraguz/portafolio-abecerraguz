import type { Metadata } from 'next'
import "highlight.js/styles/vs2015.css"
import './globals.css'
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: 'Alejandro Becerra Guzmán – UX/UI Designer & Full Stack JavaScript Developer',
  description: 'UX/UI Designer & Full Stack JavaScript Developer con más de 16 años de experiencia. Especializado en React, Next.js, Node.js, PostgreSQL y arquitecturas Headless. Docente en Duoc UC. Disponible para proyectos web en Chile.',
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
    title: 'Alejandro Becerra Guzmán – UX/UI Designer & Full Stack JavaScript Developer',
    description: 'Portafolio profesional de Alejandro Becerra. UX/UI Designer & Full Stack JavaScript Developer. Proyectos con React, Next.js, Node.js, PostgreSQL y WordPress Headless. Docente en Duoc UC.',
    url: 'https://www.abecerraguz.com',
    siteName: 'Portafolio Alejandro Becerra Guzmán',
    locale: 'es_CL',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alejandro Becerra Guzmán – UX/UI Designer & Full Stack JavaScript Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandro Becerra Guzmán – UX/UI Designer & Full Stack JavaScript Developer',
    description: 'Portafolio profesional. UX/UI Designer & Full Stack JavaScript Developer. Proyectos con React, Next.js, Node.js y PostgreSQL. Docente en Duoc UC.',
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