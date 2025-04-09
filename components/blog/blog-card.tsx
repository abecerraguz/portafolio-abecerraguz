import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { StrapiData, BlogPost } from "@/types/strapi"
import { getStrapiMedia } from "@/lib/strapi"
import { formatDate } from "@/lib/utils"

// interface BlogCardProps {
//   post: StrapiData<BlogPost>
//   featured?: boolean
// }

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
 
  const {
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

  const imageAlt = featuredImages?.alternativeText || title

  return (
    <Card
      className={`overflow-hidden h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow ${featured ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""}`}
    >
      <div className={`relative ${featured ? "h-full min-h-[250px]" : "h-48"}`}>
        <Link href={`/blog/${slug}`}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">No image</span>
            </div>
          )}
        </Link>
      </div>
      <CardContent className={`p-6 ${featured ? "flex flex-col justify-center" : ""}`}>
        {category && (
          <Badge className="mb-2 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400 hover:bg-teal-500/20">
            {category.name}
          </Badge>
        )}
        <Link href={`/blog/${slug}`} className="group">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {content?.substring(0, 150).replace(/<[^>]*>/g, "") + "..."}
        </p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(publishedAt)}</span>
          </div>
          <Link href={`/blog/${slug}`} className="ml-auto text-teal-500 dark:text-teal-400 hover:underline">
            Leer más
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
