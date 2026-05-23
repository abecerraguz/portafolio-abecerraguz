"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, GraduationCap, BookOpen, Clock, Layers } from "lucide-react"

const modules = [
  { num: "01", title: "Fundamentos y Pensamiento Algorítmico", hours: "8h", tags: ["PSeInt", "IA Generativa"] },
  { num: "02", title: "Fundamentos de Desarrollo Front End", hours: "40h", tags: ["HTML5", "CSS3", "JavaScript", "Git"] },
  { num: "03", title: "JavaScript Intermedio", hours: "24h", tags: ["ES6+", "Closures", "Arrays"] },
  { num: "04", title: "JavaScript Avanzado y DOM", hours: "32h", tags: ["OOP", "Fetch API", "async/await"] },
  { num: "05", title: "Bases de Datos Relacionales", hours: "44h", tags: ["PostgreSQL", "MySQL", "SQL"] },
  { num: "06", title: "Node.js y Express", hours: "36h", tags: ["Node.js", "Express", "REST API"] },
  { num: "07", title: "Node.js + PostgreSQL", hours: "36h", tags: ["Sequelize", "MVC", "ORM"] },
  { num: "08", title: "API RESTful, File Upload y JWT", hours: "36h", tags: ["JWT", "Auth", "Multipart"] },
  { num: "09", title: "Frontend Profesional con React y Next.js", hours: "60h", tags: ["React 19", "Next.js 15", "TypeScript", "Docker"] },
]

const techStack = [
  "HTML5", "CSS3", "JavaScript", "TypeScript",
  "React 19", "Next.js 15", "Node.js", "Express",
  "PostgreSQL", "Sequelize", "JWT", "Docker",
]

const stats = [
  { icon: Layers, value: "9", label: "Módulos" },
  { icon: BookOpen, value: "65", label: "Temas" },
  { icon: Clock, value: "316h", label: "Horas lectivas" },
  { icon: GraduationCap, value: "Trainee", label: "Nivel" },
]

export default function BootcampSection() {
  return (
    <section
      id="bootcamp"
      aria-labelledby="bootcamp-heading"
      className="py-20 relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, #84cc16 39px, #84cc16 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #84cc16 39px, #84cc16 40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
            Docencia · Activo 2026
          </Badge>
          <h2
            id="bootcamp-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            FullStackJS{" "}
            <span className="bg-gradient-to-r from-lime-500 to-amber-500 bg-clip-text text-transparent">
              Camp
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
            Programa formativo de nivel <strong className="text-gray-800 dark:text-gray-200">Trainee</strong>. Desde fundamentos de HTML y JavaScript
            hasta despliegue de aplicaciones con React, Next.js, Node.js, PostgreSQL y Docker.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-14"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-lime-500/20 to-amber-500/20 flex items-center justify-center">
                <Icon size={16} className="text-lime-600 dark:text-lime-400" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-lime-500 to-amber-500 bg-clip-text text-transparent">
                {value}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 text-center">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Contenido principal: módulos + info lateral */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Módulos — ocupa 2 columnas */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4"
            >
              Programa de módulos
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-3">
              {modules.map((mod, index) => (
                <motion.div
                  key={mod.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="group h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:border-lime-500/40 dark:hover:border-lime-500/40 transition-all duration-200 hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-mono font-bold text-lime-500 dark:text-lime-400 bg-lime-500/10 dark:bg-lime-400/10 px-2 py-1 rounded-md flex-shrink-0 mt-0.5">
                          {mod.num}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-snug mb-2">
                            {mod.title}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs text-amber-600 dark:text-amber-400 font-medium flex items-center gap-1">
                              <Clock size={10} />
                              {mod.hours}
                            </span>
                            {mod.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700/80 text-gray-500 dark:text-gray-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Panel lateral */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Stack tecnológico */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
              <CardContent className="p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                  Stack tecnológico
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 border-gray-200/50 dark:border-gray-600/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Descripción adicional */}
            <Card className="bg-gradient-to-br from-lime-500/5 to-amber-500/5 dark:from-lime-500/10 dark:to-amber-500/10 border border-lime-500/20 dark:border-lime-500/20">
              <CardContent className="p-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Diseñado para llevar a estudiantes desde cero hasta la construcción y despliegue de aplicaciones
                  Full Stack modernas, con énfasis en buenas prácticas, arquitectura y herramientas del mercado laboral.
                </p>
                {/* <p className="text-xs text-gray-400 dark:text-gray-500">
                  Basado en el programa del curso{" "}
                  <strong className="text-gray-600 dark:text-gray-300">Reinvéntate 2025 · SENCE</strong>{" "}
                  de 296 horas.
                </p> */}
              </CardContent>
            </Card>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-lime-500 to-amber-500 hover:from-lime-600 hover:to-amber-600 text-white border-0"
              >
                <a
                  href="https://fscamp.abecerraguz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visitar el sitio del bootcamp FullStackJS Camp"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Visitar FullStackJS Camp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-gray-300 dark:border-gray-700"
              >
                <a
                  href="https://github.com/abecerraguz/Repo-FullStackJS-Camp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver el repositorio del material del bootcamp en GitHub"
                >
                  <Github size={16} className="mr-2" />
                  Ver material en GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
