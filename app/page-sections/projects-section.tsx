"use client"

import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Code,
    User,
    Briefcase,
    GraduationCap,
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    ChevronRight,
    Menu,
    X,
    ArrowRight,
    Moon,
    Sun,
    Globe,
    BookOpen,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectsSection() {

    const [visibleProjects, setVisibleProjects] = useState(3)

    const projects = [
        {
            title: "BikesShop App",
            description: "Una aplicación web de administración de tiendas de bicicletas y gestión de perfiles de usarios.",
            technologies: ["HTML5","CSS3", "JavaScript", "Node", 'Express',"Postgresql"],
            image: "/bikesshop.svg?height=200&width=350",
            github: "#",
            demo: "https://www.bikesshop.org/"
        },
        {
            title: "Infohospital Manager",
            description: "Una aplicación web para gestionar citas con sistema de administración.",
            technologies: ["JavaScript", "HTML5", "CSS3", "Tailwind", "Next.js", "Postgresql", "Prisma"],
            image: "/infohospital.svg?height=200&width=350",
            github: "#",
            demo: "https://www.infohospital.org/"
        },
        {
            title: "La Tribuna",
            description: "La Tribuna: El Diario de la provincia de biobio",
            technologies: ["UX", "UI", "HTML5", "CSS3", "Bootstrap"],
            image: "/la-tribuna.svg?height=200&width=350",
            github: "#",
            demo: "https://www.latribuna.cl/"
        },
        {
            title: "Gorky Restaurant",
            description: "Landing Restaurant Gorky para mostrar sus paellas.",
            technologies: ["UI", "HTML5", "CSS3", "JavaScript", "PHP", "Wordpress"],
            image: "/gorky-restaurant.svg?height=200&width=350",
            github: "#",
            demo: "https://gorky.cl/",
        },
        {
            title: "Mi Portafolio",
            description: "Portafolio personal auto administrable ",
            technologies: ["UX","UI", "HTML5", "CSS3", "Tailwind", "JavaScript", "Next.js", "Strapi", "Postgresql" ],
            image: "/mi-portafolio.svg?height=200&width=350",
            github: "#",
            demo: "https://www.abecerraguz.com/",
        },
        {
            title: "Metro World News Publimetro",
            description: "Diseño y desarrollo de componentes Front End, basado en ReactJS para themes plataforma ARC de Amazon Web Service.",
            technologies: ["React.js", "Node.js", "ARC"],
            image: "/metro-world-news-publimetro.svg?height=200&width=350",
            github: "#",
            demo: "https://www.metroworldnews.com/",
        },
        {
            title: "Dashboard Analítico",
            description: "Panel de control con gráficos interactivos para visualizar datos empresariales.",
            technologies: ["React", "D3.js", "Express"],
            image: "/placeholder.svg?height=200&width=350",
            github: "#",
            demo: "#",
        },
        {
            title: "App de Fitness",
            description: "Aplicación para seguimiento de entrenamientos y progreso físico.",
            technologies: ["React Native", "Redux", "Firebase"],
            image: "/placeholder.svg?height=200&width=350",
            github: "#",
            demo: "#",
        },
        {
            title: "Plataforma Educativa",
            description: "Sistema de gestión de aprendizaje con cursos, evaluaciones y certificados.",
            technologies: ["Angular", "Node.js", "MongoDB"],
            image: "/placeholder.svg?height=200&width=350",
            github: "#",
            demo: "#",
        },
    ]
    return (
        <section
            id="projects"
            className="py-20 relative"
        // style={{
        //   background:
        //     theme === "dark"
        //       ? "linear-gradient(135deg, #172033 0%, #111827 50%, #0c111b 100%)"
        //       : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
        // }}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
                        Proyectos
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">Mi trabajo reciente</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-xl">
                        Aquí hay una selección de proyectos en los que he trabajado recientemente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                                <div className="relative">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                                        <div className="flex gap-3">
                                            <a
                                                href={project.github}
                                                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                                            >
                                                <Github size={18} className="text-white" />
                                            </a>
                                            <a
                                                href={project.demo}
                                                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                                            >
                                                <ExternalLink size={18} className="text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-0"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    {visibleProjects < projects.length ? (
                        <Button
                            variant="outline"
                            className="border-gray-300 dark:border-gray-700"
                            onClick={() => setVisibleProjects((prev) => Math.min(prev + 3, projects.length))}
                        >
                            Ver más proyectos
                        </Button>
                    ) : (
                        <Button
                            variant="outline"
                            className="border-gray-300 dark:border-gray-700"
                            onClick={() => setVisibleProjects(3)}
                        >
                            Mostrar menos
                        </Button>
                    )}
                </div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
        </section>
    )
}
