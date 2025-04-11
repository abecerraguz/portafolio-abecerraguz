import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlogCard } from "./blog-card"
import { getRecentBlogPosts } from "@/services/blog-service"
import Link from "next/link"

export async function BlogSection() {
  const posts = await getRecentBlogPosts(3)

  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section id="blog" className="py-20 bg-gray-100 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">Blog</Badge>
          <h2 className="text-3xl font-bold mb-4">Últimos artículos</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Comparto mis conocimientos, experiencias y consejos sobre desarrollo web y tecnología.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} featured={post.id === posts[0].id} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-gray-300 dark:border-gray-700">
            <Link href="/blog">Ver todos los artículos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}