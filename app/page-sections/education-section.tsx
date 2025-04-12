
"use client"

import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// Este es un componente de servidor que se renderiza completamente en el servidor
export default function EducationSection() {

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
    return (
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
                    <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
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
                                    <Badge className="mb-2 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
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
    )
}
