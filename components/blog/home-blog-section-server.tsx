import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getRecentBlogPosts } from "@/services/blog-service"
import { getStrapiMedia } from "@/lib/strapi"
import { formatDate } from "@/lib/utils"

// Esto es un componente de servidor
export async function HomeBlogSectionServer() {
  try {
    const posts = await getRecentBlogPosts(3)

    if (!posts || posts.length === 0) {
      return (
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 mb-6">Próximamente publicaré artículos sobre desarrollo web y tecnología.</p>
          <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800">
            <Link href="/blog">Ver blog</Link>
          </Button>
        </div>
      )
    }

    return (
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {posts.map((post) => {
              const {
                id,
                title,
                slug,
                content,
                publishedAt,
                featuredImages,
                category,
              } = post
              const imageUrl = getStrapiMedia(
                featuredImages?.formats?.medium?.url || featuredImages?.url || null
              )
            const categoryAttributes = category

            return (
              <div key={id} className="relative pl-8 border-l-2 border-gray-800 pb-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />

                <div className="flex flex-col md:flex-row gap-6">
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
                    <div className="mb-1 text-blue-400 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{formatDate(publishedAt)}</span>

                      {categoryAttributes && <Badge className="ml-3 bg-gray-800 text-gray-300">{categoryAttributes.name}</Badge>}
                    </div>

                    <Link href={`/blog/${slug}`}>
                      <h3 className="text-xl font-semibold hover:text-blue-400 transition-colors">
                        {title}
                      </h3>
                    </Link>

                    <p className="mt-2 text-gray-300 line-clamp-2">
                      {
                        (content
                          ? content.substring(0, 150).replace(/<[^>]*>/g, "") + "..."
                          : "")}
                    </p>

                    <Link href={`/blog/${slug}`} className="inline-block mt-3 text-blue-400 hover:underline">
                      Leer más
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
      </div>
    )
  } catch (error) {
    console.error("Error in HomeBlogSectionServer:", error)
    return (
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-300">Error al cargar los artículos del blog. Por favor, intenta más tarde.</p>
        <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800 mt-4">
          <Link href="/blog">Ver blog</Link>
        </Button>
      </div>
    )
  }
}
