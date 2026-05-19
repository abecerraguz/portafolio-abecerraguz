"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Code2, GraduationCap } from "lucide-react"

const devExperience = [
  {
    period: "Mayo 2025 - Presente",
    title: "Desarrollo Full Stack",
    company: "Beltra Propiedades S.A.",
    area: "Área Marketing",
    description:
      "Desarrollo de soluciones web con React y Next.js integradas con WordPress Headless y GraphQL. Implementación de funcionalidades frontend y backend, optimización de experiencia de usuario e integración de contenidos con arquitectura desacoplada orientada a mantenibilidad y escalabilidad.",
    tags: ["React", "Next.js", "WordPress Headless", "GraphQL"],
    current: false,
  },
  {
    period: "Marzo 2020 - Julio 2025",
    title: "Desarrollador Front End",
    company: "Publimetro S.A.",
    area: "Área Desarrollo",
    description:
      "Desarrollo de componentes e interfaces para plataformas digitales en entornos de alto tráfico utilizando React y Next.js. Construcción de soluciones robustas, reutilizables y alineadas con requerimientos de producto, experiencia de usuario y rendimiento.",
    tags: ["React", "Next.js", "Node.js", "ARC (AWS)"],
    current: false,
  },
  {
    period: "Enero 2019 - Enero 2020",
    title: "Desarrollador Front End",
    company: "Tryo S.A.",
    area: "",
    description:
      "Desarrollo de themes WordPress desde cero e implementación de interfaces responsivas, personalizadas y alineadas a requerimientos funcionales y visuales de distintos proyectos.",
    tags: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    current: false,
  },
  {
    period: "Noviembre 2015 - Enero 2019",
    title: "Diseñador Web / Desarrollador Web",
    company: "Anticipa S.A.",
    area: "",
    description:
      "Diseño y desarrollo de sitios web con foco en usabilidad, interfaz y funcionamiento integral. Participación en tareas de frontend y soporte a requerimientos backend según las necesidades del proyecto.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "UX/UI"],
    current: false,
  },
]

const teachingExperience = [
  {
    period: "Abril 2026",
    title: "Relator — Full Stack JavaScript Trainee",
    company: "Alkemy · English Always",
    area: "Programa Reinvéntate 2025 · SENCE",
    description:
      "Impartición de acciones de capacitación en el programa Reinvéntate 2025, contribuyendo al fortalecimiento de habilidades en Desarrollo de Aplicaciones Full Stack JavaScript Trainee. Carga horaria total de 296 horas, cumpliendo con los estándares pedagógicos y técnicos establecidos por SENCE.",
    tags: ["Full Stack", "JavaScript", "SENCE", "296 horas", "Reinvéntate 2025"],
    current: false,
  },
  {
    period: "Marzo 2022 - Presente",
    title: "Docente — Desarrollo y Diseño Web",
    company: "Duoc UC",
    area: "",
    description:
      "Impartición de asignaturas como Diseño de Interfaz, Lenguajes de Programación, Lenguaje Interactivo y Administración de Contenidos. Acompañamiento académico, revisión de proyectos y fortalecimiento de competencias técnicas y creativas en estudiantes de la carrera.",
    tags: ["Diseño de Interfaz", "JavaScript", "HTML/CSS", "Administración de Contenidos"],
    current: true,
  },
  {
    period: "Marzo 2020 - Julio 2025",
    title: "Docente Front End & Full Stack JavaScript",
    company: "Desafío Latam",
    area: "",
    description:
      "Formación de estudiantes en desarrollo Front End y Full Stack JavaScript. Enseñanza de fundamentos de JavaScript, React y Node.js con buenas prácticas de desarrollo. Revisión de proyectos, acompañamiento técnico y apoyo en la resolución de problemas, fortaleciendo habilidades de comunicación, análisis y trabajo colaborativo.",
    tags: ["JavaScript", "React", "Node.js", "Full Stack"],
    current: false,
  },
  {
    period: "Dic 2012 - Jul 2015",
    title: "Web Trainer — Área Web",
    company: "Academia MacPC",
    area: "Coordinador Diplomado Diseño Web & Mobile",
    description:
      "Docente del área web y coordinador del Diplomado en Diseño Web & Mobile. Desarrollo y coordinación de proyectos tecnológicos, gestión web (Web Manager) y formación en herramientas digitales aplicadas al diseño y desarrollo.",
    tags: ["Diseño Web", "Mobile", "Web Manager", "Coordinación"],
    current: false,
  },
  {
    period: "Mar 2007 - Dic 2013",
    title: "Docente — Escuela de Diseño",
    company: "Duoc UC",
    area: "Primera etapa docente",
    description:
      "Docencia en diversas asignaturas a lo largo de seis años: Software de Aplicación, Tecnologías de la Información, Taller de Multimedios, Computación Gráfica I, II y III, Computación Multimedia I y II, Computación Audiovisual, Experiencia de Usuario, Prototipado Web, Lenguaje Interactivo y Taller de WordPress. Además, participación en el desarrollo del Portal de la Escuela de Diseño Duoc UC como Web Manager (2013).",
    tags: ["UX", "Computación Gráfica", "WordPress", "Multimedia", "Web Manager"],
    current: false,
  },
]

function ExperienceTimeline({ items }: { items: typeof devExperience }) {
  return (
    <div className="max-w-4xl mx-auto">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex gap-6 mb-12 last:mb-0"
        >
          {/* Indicador de timeline */}
          <div className="hidden sm:block pt-1 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center shadow-sm">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-lime-500 to-amber-500"></div>
            </div>
            {index !== items.length - 1 && (
              <div className="w-0.5 h-full bg-gray-200/50 dark:bg-gray-700/50 ml-6 mt-2"></div>
            )}
          </div>

          <Card className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge className="bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
                  {item.period}
                </Badge>
                {item.current && (
                  <Badge className="bg-amber-500/10 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400 hover:bg-amber-500/20">
                    Actual
                  </Badge>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {item.company}
                {item.area && <span className="text-gray-400 dark:text-gray-500"> · {item.area}</span>}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-gray-100/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
            Experiencia
          </Badge>
          <h2 id="experience-heading" className="text-3xl font-bold mb-4">Trayectoria profesional</h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            Desarrollo web y docencia: dos facetas que se complementan en mi trabajo diario.
          </p>
        </div>

        <Tabs defaultValue="dev" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-12 max-w-sm mx-auto">
            <TabsTrigger value="dev" className="flex items-center gap-2">
              <Code2 size={16} />
              Desarrollo
            </TabsTrigger>
            <TabsTrigger value="teaching" className="flex items-center gap-2">
              <GraduationCap size={16} />
              Docencia
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dev">
            <ExperienceTimeline items={devExperience} />
          </TabsContent>

          <TabsContent value="teaching">
            <ExperienceTimeline items={teachingExperience} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
    </section>
  )
}
