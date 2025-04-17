import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getRecentBlogPosts } from "@/services/blog-service"
import { getStrapiMedia } from "@/lib/strapi"
import { formatDate } from "@/lib/utils"
import { extractSummary } from "@/src/lib/extract-summary"

export async function BlogSection() {
  try {
    const posts = await getRecentBlogPosts(3)

    return (
      <section id="blog" className="py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-lime-400 hover:bg-emerald-500/20 dark:hover:bg-emerald-400/20">
              Blog
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Artículos de interés</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Comparto mis conocimientos, experiencias y consejos sobre desarrollo web y tecnología.
            </p>
          </div>

          {posts && posts.length > 0 ? (
            <>
              <div className="space-y-8">
                {posts.map((post) => {

                  const {
                    id,
                    title,
                    slug,
                    content,
                    publishedAt,
                    coverImage,
                    category,
                    excerpt
                  } = post

                  const imageUrl = getStrapiMedia(
                    coverImage?.formats?.medium?.url || coverImage?.url || null
                  )

                  return (
                    <div key={id} className="relative pl-8 border-l-2 border-gray-800 pb-8">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-lime-500 to-amber-500" />

                      <div className="flex flex-col md:flex-row gap-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 rounded-lg p-5">
                        {imageUrl && (
                          <div className="md:w-1/3 h-48 relative rounded-lg overflow-hidden">
                            <Image
                              src={imageUrl || "/placeholder.svg"}
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

                          <p className="text-gray-500 dark:text-gray-400 mb-5 line-clamp-2">
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

              <div className="mt-8 text-center">
                <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800">
                  <Link href="/blog">Ver todos los artículos</Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 mb-6">Próximamente publicaré artículos sobre desarrollo web y tecnología.</p>
              <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800">
                <Link href="/blog">Ver blog</Link>
              </Button>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
      </section>
    )
  } catch (error) {
    console.error("Error in BlogSection:", error)
    return (
      <section id="blog" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="text-blue-400">Mi Blog</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300">Error al cargar los artículos del blog. Por favor, intenta más tarde.</p>
            <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800 mt-4">
              <Link href="/blog">Ver blog</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }
}
