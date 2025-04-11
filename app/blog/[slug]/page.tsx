import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogPostBySlug } from "@/services/blog-service"
import { getStrapiMedia } from "@/lib/strapi"
import { formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await getBlogPostBySlug(params.slug)

    if (!post) {
      return {
        title: "Artículo no encontrado",
        description: "El artículo que buscas no existe",
      }
    }

    return {
      title: `${post.title} - Blog de TuNombre`,
      description: post.content?.substring(0, 160).replace(/<[^>]*>/g, "") ?? "",
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Error",
      description: "Ocurrió un error al cargar el artículo",
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await getBlogPostBySlug(params.slug)

    if (!post) {
      notFound()
    }

    const {
      title,
      content,
      slug,
      publishedAt,
      featuredImages,
      category,
    } = post

    const imageUrl = getStrapiMedia(featuredImages?.url ?? null)
    const imageAlt = featuredImages?.alternativeText || title

    return (
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-teal-500 dark:text-teal-400 hover:underline mb-8"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver al blog
            </Link>

            <article>
              <header className="mb-8">
                {category && (
                  <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                    {category.name}
                  </Badge>
                )}
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{formatDate(publishedAt)}</span>
                  </div>
                </div>
              </header>

              {imageUrl && (
                <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                  <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
                </div>
              )}

              <div
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-600 dark:prose-p:text-gray-300"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </article>
          </div>
        </div>
      </main>
    )
  } catch (error) {
    console.error("Error in BlogPostPage:", error)
    return (
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Error</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Ocurrió un error al cargar el artículo. Por favor, intenta más tarde.
          </p>
          <Link href="/blog" className="inline-flex items-center text-teal-500 dark:text-teal-400 hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Volver al blog
          </Link>
        </div>
      </main>
    )
  }
}
