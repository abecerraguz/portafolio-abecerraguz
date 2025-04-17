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
  NotebookPen
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"

interface NavItem {
  id: string
  label: string
  icon: JSX.Element
}

interface NavSectionProps {
  itemsToShow?: string[]
  linkOverrides?: Record<string, string> // ← nueva prop para sobrescribir links
  linkLabes?: Record<string, string> // ← nueva prop para sobrescribir links
}


export default function NavSection({ itemsToShow, linkOverrides, linkLabes }: NavSectionProps) {
  
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const allNavItems: NavItem[] = [
    { id: "home", label: "Inicio", icon: <Code size={18} /> },
    { id: "about", label: "Sobre mí", icon: <User size={18} /> },
    { id: "projects", label: "Proyectos", icon: <Briefcase size={18} /> },
    { id: "education", label: "Educación", icon: <GraduationCap size={18} /> },
    { id: "blog", label: "Blog", icon: <NotebookPen size={18} /> },
    { id: "contact", label: "Contacto", icon: <Mail size={18} /> },
  ]

  const navItems = itemsToShow
    ? allNavItems.filter((item) => itemsToShow.includes(item.id))
    : allNavItems

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      if (mobileMenuOpen) setMobileMenuOpen(false)
      const offsetTop = element.offsetTop
      const headerOffset = 80
      const finalPosition = offsetTop - headerOffset
      window.scrollTo({ top: finalPosition, behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme={theme} enableSystem>
      <div className="bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-amber-500 flex items-center justify-center text-white font-bold">
                AB
              </div>
              <span className="font-bold text-xl hidden sm:block">Mi Portafolio</span>
            </div>

            {/* Desktop Navigation */}
            {navItems.length > 0 && (
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={linkOverrides?.[item.id] ?? `#${item.id}`}
                    onClick={(e) => {
                      const override = linkOverrides?.[item.id]
                      if (!override?.startsWith("/#")) return // si es navegación, no hacer scroll
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      activeSection === item.id
                        ? "bg-gray-100 dark:bg-gray-800 text-emerald-500 dark:text-lime-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    {linkLabes?.[item.id] ?? `${item.label}`}
                  </a>
                ))}
              </nav>
            )}

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

              {/* {itemsToShow?.includes("contact") && (
                <Button
                  className="hidden md:flex bg-gradient-to-r from-lime-500 to-amber-500 hover:from-lime-600 hover:to-amber-600 text-white border-0"
                  onClick={() => scrollToSection("contact")}
                >
                  Contactar
                </Button>
              )} */}
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
                    href={linkOverrides?.[item.id] ?? `#${item.id}`}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                    onClick={(e) => {
                      const override = linkOverrides?.[item.id]
                      if (!override?.startsWith("/#")) return // si es navegación, no hacer scroll
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">{item.icon}</div>
                      <span className="font-medium">{linkLabes?.[item.id] ?? `${item.label}`}</span>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
