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

export default function NavSection() {
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



  const navItems = [
    { id: "home", label: "Inicio", icon: <Code size={18} /> },
    { id: "about", label: "Sobre mí", icon: <User size={18} /> },
    { id: "projects", label: "Proyectos", icon: <Briefcase size={18} /> },
    { id: "education", label: "Educación", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contacto", icon: <Mail size={18} /> },
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
                AB
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
                  <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
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

        
        </main>

       
      </div>
    </ThemeProvider>
  )
}

