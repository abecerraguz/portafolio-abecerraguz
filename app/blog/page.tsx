import { Badge } from "@/components/ui/badge"
import { BlogCard } from "@/components/blog/blog-card"
import { getBlogPosts } from "@/services/blog-service"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Blog - TuNombre",
  description: "Artículos sobre desarrollo web, tecnología y más",
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const pageNumber = Number.parseInt(searchParams.page || "1") || 1
  const pageSize = 6

  try {
    const response = await getBlogPosts(pageNumber, pageSize)

    if (!response?.data?.length) {
      return (
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-gray-600 dark:text-gray-300">
              No se encontraron artículos. Por favor, intenta más tarde.
            </p>
          </div>
        </main>
      )
    }

    const { data: posts, meta } = response

    return (
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
              Blog
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Mi Blog</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Comparto mis conocimientos, experiencias y consejos sobre desarrollo web y tecnología.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard
                key={post.id}
                post={post}
                featured={index === 0 && pageNumber === 1}
              />
            ))}
          </div>

          {meta?.pagination?.pageCount > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center justify-center space-x-2">
                {/* Botón Anterior */}
                <Button variant="outline" size="icon" disabled={pageNumber === 1} asChild>
                  {pageNumber === 1 ? (
                    <span className="opacity-50">
                      <ChevronLeft className="h-4 w-4" />
                    </span>
                  ) : (
                    <Link href={`/blog?page=${pageNumber - 1}`}>
                      <ChevronLeft className="h-4 w-4" />
                    </Link>
                  )}
                </Button>

                {/* Números de página */}
                {Array.from({ length: meta.pagination.pageCount }, (_, i) => i + 1).map((p) => (
                  <Button
                    key={`page-${p}`}
                    variant={pageNumber === p ? "default" : "outline"}
                    size="icon"
                    asChild={pageNumber !== p}
                  >
                    {pageNumber === p ? <span>{p}</span> : <Link href={`/blog?page=${p}`}>{p}</Link>}
                  </Button>
                ))}

                {/* Botón Siguiente */}
                <Button
                  variant="outline"
                  size="icon"
                  disabled={pageNumber === meta.pagination.pageCount}
                  asChild
                >
                  {pageNumber === meta.pagination.pageCount ? (
                    <span className="opacity-50">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  ) : (
                    <Link href={`/blog?page=${pageNumber + 1}`}>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  )}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </main>
    )
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return (
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Ocurrió un error al cargar los artículos. Por favor, intenta más tarde.
          </p>
        </div>
      </main>
    )
  }
}
