"use client"

import { useEffect, useState } from 'react'
import {
  Mail,
  Github,
  Linkedin,
  ArrowUp

} from "lucide-react"

// Este es un componente de servidor que se renderiza completamente en el servidor
export function FooterSection() {
  try {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
      <>
        {/* Footer */}
        <footer
          className="py-8 border-t border-gray-200 dark:border-gray-800"
        // style={{
        //   background:
        //     theme === "dark"
        //       ? "linear-gradient(to bottom, #0f172a, #0a1222)"
        //       : "linear-gradient(to bottom, #f8fafc, #f1f5f9)",
        // }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lime-400 to-amber-500 flex items-center justify-center text-white font-bold text-xs">
                  AB
                </div>
                <span className="font-bold">AbecerraGuz</span>
              </div>

              <div className="text-gray-500 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} AbecerraGuz Todos los derechos reservados.
              </div>

              <button
                onClick={scrollToTop}
                className={`
    fixed bottom-6 right-6 p-3 rounded-full bg-black text-white 
    shadow-lg z-50 transition-opacity duration-500 ease-in-out
    ${showButton ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
  `}
                aria-label="Volver arriba"
              >
                <ArrowUp size={20} />
              </button>

              <div className="flex gap-4 mt-4 md:mt-0">
                <a
                  href="https://github.com/abecerraguz"
                  className="text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-lime-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abecerraguz/"
                  className="text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-lime-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:abcerraguz@gmail.com"
                  className="text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-lime-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  } catch (error) {
    console.error("Error in FooterSection:", error)
    return (
      <section id="blog" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300">Error al cargar el footer section</p>
          </div>
        </div>
      </section>
    )
  }
}