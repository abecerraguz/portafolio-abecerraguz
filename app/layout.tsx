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
  title: 'Portafolio Alejandro Becerra',
  description: 'Portafolio desarrollado con NextJS, Tailwind, TypeScript',
  generator: 'NextJS 15.2.4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
