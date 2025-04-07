"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  ExternalLink,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Cambiar sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Inicio", icon: <Code size={18} /> },
    { id: "about", label: "Sobre mí", icon: <User size={18} /> },
    { id: "projects", label: "Proyectos", icon: <Briefcase size={18} /> },
    { id: "education", label: "Educación", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contacto", icon: <Mail size={18} /> },
  ]

  const skills = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "Git", level: 75 },
  ]

  const projects = [
    {
      title: "E-commerce App",
      description: "Una aplicación de comercio electrónico con carrito de compras y pasarela de pago.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Manager",
      description: "Aplicación para gestionar tareas diarias con funcionalidad de arrastrar y soltar.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather App",
      description: "Aplicación que muestra el clima actual y pronóstico utilizando una API externa.",
      technologies: ["React", "API REST", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 font-sans">
      {/* Navegación móvil */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-gray-800 p-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            TuNombre
          </span>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-4"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    activeSection === item.id ? "bg-gray-800 text-blue-400" : "hover:bg-gray-800/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>

      {/* Navegación de escritorio */}
      <nav className="hidden md:flex fixed left-8 top-1/2 transform -translate-y-1/2 flex-col gap-6 z-50">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2 p-2 rounded-full transition-all ${
              activeSection === item.id
                ? "bg-gray-800 text-blue-400 shadow-lg shadow-blue-500/20"
                : "hover:bg-gray-800/50"
            }`}
            title={item.label}
          >
            {item.icon}
            <span
              className={`${
                activeSection === item.id ? "opacity-100 w-auto" : "opacity-0 w-0"
              } overflow-hidden transition-all duration-300`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 pt-20 md:pt-0">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center py-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors">
                Desarrollador Web Junior
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  TuNombre
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Desarrollador frontend apasionado por crear experiencias web atractivas y funcionales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Contactar
                </Button>
              </div>
            </motion.div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <User size={24} className="text-blue-400" />
              Sobre mí
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-6">
                  Soy un desarrollador web junior con pasión por aprender nuevas tecnologías y crear soluciones
                  innovadoras. Mi objetivo es combinar diseño y funcionalidad para crear experiencias de usuario
                  excepcionales.
                </p>
                <p className="text-gray-300 mb-6">
                  Actualmente estoy enfocado en el desarrollo frontend con React, pero también tengo experiencia con
                  Node.js y bases de datos. Me encanta resolver problemas y colaborar en equipos multidisciplinarios.
                </p>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Descargar CV
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Mis habilidades</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase size={24} className="text-blue-400" />
              Mis Proyectos
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover border-b border-gray-800"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-sm flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Github size={16} /> Código
                      </a>
                      <a
                        href={project.demo}
                        className="text-sm flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={16} /> Demo
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap size={24} className="text-blue-400" />
              Educación
            </h2>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-gray-800 pb-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                <div className="mb-1 text-blue-400">2020 - 2023</div>
                <h3 className="text-xl font-semibold">Grado en Desarrollo Web</h3>
                <p className="text-gray-400">Universidad Ejemplo</p>
                <p className="mt-2 text-gray-300">
                  Estudios centrados en desarrollo web, programación y diseño de interfaces.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-800 pb-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500" />
                <div className="mb-1 text-purple-400">2023</div>
                <h3 className="text-xl font-semibold">Bootcamp de Desarrollo Frontend</h3>
                <p className="text-gray-400">Academia Código</p>
                <p className="mt-2 text-gray-300">
                  Formación intensiva en React, JavaScript moderno y desarrollo de aplicaciones web.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500" />
                <div className="mb-1 text-green-400">En curso</div>
                <h3 className="text-xl font-semibold">Certificación en UX/UI Design</h3>
                <p className="text-gray-400">Plataforma Online</p>
                <p className="mt-2 text-gray-300">
                  Aprendiendo principios de diseño de experiencia de usuario e interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Mail size={24} className="text-blue-400" />
              Contacto
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-6">
                  ¿Interesado en trabajar juntos o tienes alguna pregunta? No dudes en contactarme a través del
                  formulario o por mis redes sociales.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-400" />
                    <span>tunombre@ejemplo.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="text-blue-400" />
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      github.com/tunombre
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="text-blue-400" />
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      linkedin.com/in/tunombre
                    </a>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Enviar mensaje</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TuNombre. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

