export const dynamic = "force-static"

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://abecerraguz.com"

  const content = `# Alejandro Becerra Guzmán — Portafolio
> Diseñador UX/UI con perfil Full Stack JavaScript. 16+ años de experiencia. Docente en Duoc UC.

## Sobre mí
Integro experiencia de usuario, diseño de interfaces y desarrollo web para construir productos digitales que equilibren claridad visual, funcionalidad y solidez técnica.

Stack principal: React, Next.js, Node.js, Express, PostgreSQL, TypeScript, Tailwind CSS, WordPress Headless, GraphQL.

## Secciones
- Inicio: ${baseUrl}/#hero
- Sobre mí: ${baseUrl}/#about
- Experiencia: ${baseUrl}/#experience
- Proyectos: ${baseUrl}/#projects
- Educación: ${baseUrl}/#education
- Blog: ${baseUrl}/blog
- Contacto: ${baseUrl}/#contact

## Proyectos destacados
- [Palvi Dashboard Ejecutivo](https://palvi-one.vercel.app/): Prueba técnica de dashboard comercial con React, TypeScript, Vite, Tailwind CSS y Chart.js.
- [FullStackJS Camp](${baseUrl}/#projects): Programa formativo Full Stack JavaScript. React, Next.js, Node.js, PostgreSQL, Docker.
- [Beltra](https://beltra.cl/): Plataforma inmobiliaria Headless con Next.js, WordPress y GraphQL.
- [Equilec](https://www.equilec.cl/): Sitio con catálogo, buscador y cotizaciones online. Next.js + WordPress Headless.

## Redes
- GitHub: https://github.com/abecerraguz
- LinkedIn: https://linkedin.com/in/abecerraguz
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
