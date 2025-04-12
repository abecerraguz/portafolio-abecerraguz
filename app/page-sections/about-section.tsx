"use client"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutSection() {
  
  const skills = [
        { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","SASS","Astro"] },
        { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL", "Postgres","Prisma", "Sequelize", "PHP"] },
        { category: "Herramientas", items: ["Git", "GitHub", "VS Code", "Figma","Adobe XD", "Responsive Design"] },
  ]
  return (
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
        <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
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
  )
}
