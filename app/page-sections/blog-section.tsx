"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getRecentBlogPosts } from "@/services/blog-service"
import { getStrapiMedia } from "@/lib/strapi"
import { formatDate } from "@/lib/utils"

export function BlogSection() {
  const [posts, setPosts] = useState<any[]>([])
  const [visibleCount, setVisibleCount] = useState(2)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const allPosts = await getRecentBlogPosts(10) // o la cantidad total que deseas traer
        setPosts(allPosts)
      } catch (err) {
        console.error("Error al obtener posts:", err)
      }
    }
    fetchPosts()
  }, [])

  const visiblePosts = posts.slice(0, visibleCount)

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
            Blog
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Artículos de interés</h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            Comparto mis conocimientos, experiencias y consejos sobre desarrollo web y tecnología.
          </p>
        </div>

        <div className="space-y-8">
          {visiblePosts.map((post) => {
            const {
              id,
              title,
              slug,
              publishedAt,
              coverImage,
              category,
              excerpt
            } = post

            const imageUrl = getStrapiMedia(
              coverImage?.formats?.medium?.url || coverImage?.url || null
            )

            return (
              <div key={id} className="relative pb-8 container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 rounded-lg p-6 border">
                  {imageUrl && (
                    <div className="md:w-1/3 h-48 relative rounded-lg overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className={`${imageUrl ? "md:w-2/3" : "w-full"}`}>
                    <Badge className="mb-5 bg-emerald-500/10 text-emerald-500 dark:bg-transparent dark:text-lime-400 p-0">
                      <Calendar size={14} className="mr-1" />
                      <span>{formatDate(publishedAt)}</span>
                      {category && (
                        <Badge className="ml-3 bg-gray-800 text-gray-300">{category.name}</Badge>
                      )}
                    </Badge>
                    <Link href={`/blog/${slug}`}>
                      <h3 className="text-xl font-semibold hover:text-lime-400 transition-colors mb-3">
                        {title}
                      </h3>
                    </Link>
                    <p className="text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">
                      {excerpt.length > 180 ? `${excerpt.slice(0, 180)}...` : excerpt}
                    </p>
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-flex items-center gap-0 px-3 py-1 text-sm text-gray-400  hover:text-lime-400 pl-0 transition-colors"
                    >
                      Leer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {visibleCount < posts.length && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-gray-700 hover:bg-gray-800"
              onClick={() => setVisibleCount((prev) => prev + 2)}
            >
              Ver más publicaciones
            </Button>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20 dark:to-transparent" />
    </section>
  )
}
