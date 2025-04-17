import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogPostBySlug } from "@/services/blog-service"
import { getStrapiMedia } from "@/lib/strapi"
import { formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
// import RichTextRenderer from "@/components/RichTextRenderer"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import NavSection from "@/app/page-sections/nav-section"
import { FooterSection } from "@/app/page-sections/footer-section"

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
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
      description:
        typeof post.content === "string"
          ? post.content.substring(0, 160).replace(/<[^>]*>/g, "")
          : post.title,
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "Error",
      description: "Ocurrió un error al cargar el artículo",
    }
  }
}

export default async function BlogPostPage(
  { params }: { params: { slug: string } }
) {
  try {
    const post = await getBlogPostBySlug(params.slug)

    if (!post) notFound()

    const {
      title,
      content,
      publishedAt,
      coverImage,
      category,
    } = post

    const imageUrl = getStrapiMedia(coverImage?.url ?? null)
    const imageAlt = coverImage?.alternativeText || title

    return (
      <>
      <NavSection/>
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/"
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

                {/* {imageUrl && (
                  <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )} */}
                  <section className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-code:text-pink-600 dark:prose-code:text-pink-400">
                      <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                      >
                      {typeof content === "string" ? content : "Contenido no disponible."}
                    </ReactMarkdown>
                  </section>
              </article>
            </div>
          </div>
        </main>
      <FooterSection/>
      </>
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
