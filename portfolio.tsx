"use client"

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
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeProvider } from "@/components/theme-provider"
import ParticlesBackground from "@/components/particles-background"
import ContactForm from "@/components/contact-form"
import EnvSetupGuide from "@/components/env-setup-guide"

export default function Portfolio() {
  
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [visibleProjects, setVisibleProjects] = useState(3)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Montar componente
  useEffect(() => {
    setMounted(true)
  }, [])

  // Cambiar sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

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

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Cambiando tema a:", newTheme);
    setTheme(newTheme);
  }

  const navItems = [
    { id: "home", label: "Inicio", icon: <Code size={18} /> },
    { id: "about", label: "Sobre mí", icon: <User size={18} /> },
    { id: "projects", label: "Proyectos", icon: <Briefcase size={18} /> },
    { id: "education", label: "Educación", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contacto", icon: <Mail size={18} /> },
  ]

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","SASS","Astro"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL", "Postgres","Prisma", "Sequelize", "PHP"] },
    { category: "Herramientas", items: ["Git", "GitHub", "VS Code", "Figma","Adobe XD", "Responsive Design"] },
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
    {
      title: "Portfolio Personal",
      description: "Sitio web personal para mostrar proyectos y habilidades a posibles empleadores.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
    {
      title: "Blog de Tecnología",
      description: "Plataforma de blog con sistema de comentarios y panel de administración.",
      technologies: ["React", "Firebase", "Material UI"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
    {
      title: "Aplicación de Recetas",
      description: "Aplicación para buscar, guardar y compartir recetas de cocina favoritas.",
      technologies: ["Vue.js", "Vuex", "Node.js"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
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

  const education = [
    {
      period: "Junio 2021 - Octubre 2021",
      title: "Desarrollador Full Stack MERN",
      institution: "Coding Dojo",
      description: "Bootcamp Desarrollo Full-Stack, abarca Mongo, Express, React, Node, estudios centrados en desarrollo web, programación y diseño de interfaces.",
    },
    {
      period: "Marzo 2012 - Octubre 2012",
      title: "Diplomado Web Manager and Desing Pro",
      institution: "Academía Mac",
      description: "Diplomado que abarca los últimos estándares web manejo de HTML5, CSS3, JavaScript.",
    },
    {
      period: "2009",
      title: "Workshop Curso de Creatividad",
      institution: "School of Visual Arts SVA New York",
      description: "Curso enfocado a la gestión de la creatividad."
    },
    {
      period: "1999-2000",
      title: "Master en Diseño y Comunicación Multimedia",
      institution: "The Arts Institute TRACOR España",
      description: "Manejo y especialización en comunicación visual en los nuevos medios."
    },
    {
      period: "1994-1999",
      title: "Diseñador Gráfico",
      institution: "Universidad José Santos Ossa",
      description: "Manejo y especialización en comunicación visual en los nuevos medios."
    }
  ]

  // Función para desplazamiento suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Cerrar el menú móvil si está abierto
      if (mobileMenuOpen) setMobileMenuOpen(false)

      // Obtener la posición del elemento
      const offsetTop = element.offsetTop

      // Calcular la posición final (restando el alto del header)
      const headerOffset = 80 // Altura aproximada del header
      const finalPosition = offsetTop - headerOffset

      // Animar el scroll
      window.scrollTo({
        top: finalPosition,
        behavior: "smooth",
      })

      // Actualizar la sección activa
      setActiveSection(sectionId)
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme={theme} enableSystem>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-amber-500 flex items-center justify-center text-white font-bold">
                MP
              </div>
              <span className="font-bold text-xl hidden sm:block">Mi Portafolio</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? "bg-gray-100 dark:bg-gray-800 text-emerald-500 dark:text-lime-400"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>

              <Button
                className="hidden md:flex bg-gradient-to-r from-lime-500 to-amber-500 hover:from-lime-600 hover:to-amber-600 text-white border-0"
                onClick={() => scrollToSection("contact")}
              >
                Contactar
              </Button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-16"
            >
              <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">{item.icon}</div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section - Gradiente azul a negro con partículas */}
          <section
            id="home"
            className="min-h-screen flex items-center py-20 relative overflow-hidden"
            // style={{
            //   background:
            //     theme === "dark"
            //       ? "linear-gradient(135deg, #0f172a 0%, #0a1222 50%, #050a14 100%)"
            //       : "linear-gradient(135deg, #f8fafc 0%, #d0e0f0 50%, #c9e0ff 100%)"
            // }}
          >
            {/* Particles Background */}
            {mounted && <ParticlesBackground theme={theme} />}

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="order-2 md:order-1"
                >
                  <Badge className="mb-4 bg-emerald-500/10 text-lime-700 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
                    Desarrollador Web
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hola, soy{" "}
                    <span className="bg-gradient-to-r from-lime-500 to-amber-500 bg-clip-text text-transparent">
                      AbecerraGuz
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Desarrollador frontend apasionado por crear experiencias web atractivas y funcionales.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      className="bg-gradient-to-r from-lime-500 to-amber-500 hover:from-lime-600 hover:to-amber-600 text-white border-0"
                      onClick={() => scrollToSection("projects")}
                    >
                      Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-300 dark:border-gray-700"
                      onClick={() => {
                          const link = document.createElement("a")
                          link.href = "/curriculum-abecerraguz-2025.pdf"
                          link.download = "curriculum-abecerraguz-2025.pdf"
                          document.body.appendChild(link)
                          link.click()
                          document.body.removeChild(link)
                      }}
                    >
                    Descargar CV
                  </Button>
                  </div>

                  <div className="mt-12 flex gap-4">
                    <a
                      href="https://github.com/abecerraguz"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-lime-400 transition-colors"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abecerraguz/"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-lime-400 transition-colors"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="mailto:abcerraguz@gmail.com"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-lime-400 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                    <a
                      href="https://www.abecerraguz.com/"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-lime-400 transition-colors"
                      aria-label="Website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={20} />
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="order-1 md:order-2 flex justify-center"
                >
                  <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-emerald-500 to-purple-500 blur-3xl opacity-20 absolute -inset-4"></div>
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative z-10">
                      <img
                        src="/abecerraguz.jpg?height=400&width=400"
                        alt="Tu foto de perfil"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
          </section>

          {/* About Section - Gradiente diferente */}
          <section
            id="about"
            className="py-20 relative"
            // style={{
            //   background:
            //     theme === "dark"
            //       ? ""
            //       : "",
            // }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400">
                  Sobre mí
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Conóceme mejor</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Soy un desarrollador web con pasión por aprender nuevas tecnologías y crear soluciones innovadoras.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Mi historia</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">Soy un diseñador, Máster en Diseño y Comunicación Multimedia, y desarrollador web con pasión por seguir aprendiendo nuevas tecnologías y crear soluciones innovadoras. Mi objetivo es combinar diseño y funcionalidad para ofrecer experiencias de usuario excepcionales.</p>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">Actualmente estoy enfocado en el desarrollo frontend con Next.js y React, aunque también cuento con experiencia en Node.js y bases de datos. Me encanta resolver problemas, aprender constantemente y colaborar en equipos multidisciplinarios.</p>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">Me desempeño como Diseñador UI & Front-End en Publimetro, además de ser académico en Desafío Latam. Soy egresado del Bootcamp de Desarrollo Full-Stack de Coding Dojo, lo que me ha permitido fortalecer mis habilidades tanto en frontend como en backend.</p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 shadow-sm backdrop-blur-sm">
                      <div className="text-3xl font-bold text-amber-500 dark:text-amber-400 mb-1">16+</div>
                      <div className="text-gray-600 dark:text-gray-300">Años de experiencia</div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 shadow-sm backdrop-blur-sm">
                      <div className="text-3xl font-bold text-lime-500 dark:text-lime-500 mb-1">10+</div>
                      <div className="text-gray-600 dark:text-gray-300">Proyectos completados</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">Mis habilidades</h3>
                  <Tabs defaultValue="Frontend" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      {skills.map((skill) => (
                        <TabsTrigger key={skill.category} value={skill.category}>
                          {skill.category}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {skills.map((skill) => (
                      <TabsContent key={skill.category} value={skill.category} className="mt-0">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {skill.items.map((item) => (
                            <div
                              key={item}
                              className="p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center gap-2"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lime-500 to-amber-500"></div>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
          </section>

          {/* Projects Section - Otro gradiente */}
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
                <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400">
                  Proyectos
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Mi trabajo reciente</h2>
                <p className="text-gray-600 dark:text-gray-300">
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

          {/* Education Section - Otro gradiente más */}
          <section
            id="education"
            className="py-20 relative"
            // style={{
            //   background:
            //     theme === "dark"
            //       ? "linear-gradient(135deg, #1a2436 0%, #131c2e 50%, #0c1424 100%)"
            //       : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)",
            // }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400">
                  Educación
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Mi formación académica</h2>
                <p className="text-gray-600 dark:text-gray-300">Mi trayectoria educativa y formación profesional.</p>
              </div>

              <div className="max-w-4xl mx-auto">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 mb-12 last:mb-0"
                  >
                    <div className="hidden sm:block pt-1">
                      <div className="w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center shadow-sm">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-lime-500 to-amber-500"></div>
                      </div>
                      {index !== education.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200/50 dark:bg-gray-700/50 ml-6 mt-2"></div>
                      )}
                    </div>

                    <Card className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                      <CardContent className="p-6">
                        <Badge className="mb-2 bg-purple-500/10 text-purple-500 dark:bg-lime-400/10 dark:text-lime-400">
                          {item.period}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">{item.institution}</p>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
          </section>

         {/* Blog Section 
         {/* <section id="blog" className="py-20 relative">
          <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400">
                  Blog
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Mi formación académica</h2>
                <p className="text-gray-600 dark:text-gray-300">Mi trayectoria educativa y formación profesional.</p>
              </div>

            {/* <HomeBlogSection /> *
          </div>
        </section> */}

          {/* Contact Section - Gradiente final */}
          <section
            id="contact"
            className="py-20 relative"
            style={{
              background:
                theme === "dark"
                  ? "linear-gradient(135deg, #0f172a 0%, #0a1222 50%, #050a14 100%)"
                  : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
            }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400">
                  Contacto
                </Badge>
                <h2 className="text-3xl font-bold mb-4">¿Hablamos?</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  ¿Interesado en trabajar juntos o tienes alguna pregunta?
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                  <div className="grid md:grid-cols-5">
                    <div className="md:col-span-2 bg-gradient-to-br from-emerald-500 to-purple-500 p-8 text-white relative">
                      <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
                      <p className="mb-8 opacity-90">
                        Completa el formulario y me pondré en contacto contigo lo antes posible.
                      </p>

                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-full bg-white/20">
                            <Mail size={20} />
                          </div>
                          <span>tunombre@ejemplo.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-full bg-white/20">
                            <Github size={20} />
                          </div>
                          <span>github.com/tunombre</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-full bg-white/20">
                            <Linkedin size={20} />
                          </div>
                          <span>linkedin.com/in/tunombre</span>
                        </div>
                      </div>

                      <div className="absolute bottom-8 left-8 right-8 opacity-10">
                        <Code size={180} />
                      </div>
                    </div>

                    <div className="md:col-span-3 p-8">
                      <ContactForm />
                    </div>
                  </div>
                </Card>

                {/* Guía de configuración */}
                {/* <EnvSetupGuide /> */}
              </div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
          </section>
        </main>

       
      </div>
    </ThemeProvider>
  )
}

