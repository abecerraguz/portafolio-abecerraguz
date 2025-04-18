"use client"
import ContactForm from "@/components/contact-form"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import {
  Code,
  Mail,
  Github,
  Linkedin,

} from "lucide-react"

export default function ContactSection() {

  return (
        <section
                id="contact"
                className="py-20 relative bg-gradient-to-t from-black/10 to-transparent dark:from-black/20 dark:to-transparent"
              >
                <div className="container mx-auto px-4">
                  <div className  ="max-w-3xl mx-auto text-center mb-16">
                    <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400">
                      Contacto
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">¿Hablamos?</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-xl">
                      ¿Interesado en trabajar juntos o tienes alguna pregunta?
                    </p>
                  </div>
    
                  <div className="max-w-5xl mx-auto">
                    <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                      <div className="grid md:grid-cols-5">
                        <div className="md:col-span-2 bg-gradient-to-br from-lime-500 to-amber-500 p-8 text-white relative">
                          <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
                          <p className="mb-8 opacity-90">
                            Completa el formulario y me pondré en contacto contigo lo antes posible.
                          </p>
    
                          <div className="space-y-6">
                            <div className="flex items-center gap-4">
                              <div className="p-2 rounded-full bg-white/20">
                                <Mail size={20} />
                              </div>
                              <span>abcerraguz@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="p-2 rounded-full bg-white/20">
                                <Github size={20} />
                              </div>
                              <span>github.com/abecerraguz</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="p-2 rounded-full bg-white/20">
                                <Linkedin size={20} />
                              </div>
                              <span>linkedin.com/in/abecerraguz/</span>
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
  )
}
