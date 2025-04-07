// app/layout.tsx (o src/app/layout.tsx)
import type { Metadata } from 'next'
import './globals.css'

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
