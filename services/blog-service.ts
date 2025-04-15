import type { BlogPost, StrapiMeta } from "@/types/strapi"

// Nombre de la colección en Strapi (pluralizado)
const COLLECTION_NAME = "posts"

interface BlogResponse {
  data: BlogPost[]
  meta: StrapiMeta
}

// Función para construir la URL con params
function buildUrl(path: string, params: Record<string, string>) {

  const query = new URLSearchParams(params).toString()
  console.log('MIERDA---->', process.env)
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}/api${path}?${query}`
}

// Traer posts paginados
export const getBlogPosts = async (page = 1, pageSize = 6): Promise<BlogResponse> => {
  try {
    const path = `/${COLLECTION_NAME}`
    const params = {
      populate: "featuredImages",
      "pagination[page]": page.toString(),
      "pagination[pageSize]": pageSize.toString(),
      sort: "publishedAt:desc",
    }

    const res = await fetch(buildUrl(path, params), { cache: "no-store" })
    if (!res.ok) throw new Error("Error fetching posts")

    const json = await res.json()
    return {
      data: json.data as BlogPost[],
      meta: json.meta,
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize,
          pageCount: 0,
          total: 0,
        },
      },
    }
  }
}

// Traer post único por slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const path = `/${COLLECTION_NAME}`
    const params = {
      populate: "featuredImages",
      "filters[slug][$eq]": slug,
    }

    const res = await fetch(buildUrl(path, params), { cache: "no-store" })
    const json = await res.json()

    const post = json.data?.[0] as BlogPost | undefined
    return post || null
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error)
    return null
  }
}

// Traer posts recientes (últimos N)
export const getRecentBlogPosts = async (limit = 3): Promise<BlogPost[]> => {
  try {
    const path = `/${COLLECTION_NAME}`
    const params = {
      populate: "featuredImages",
      "pagination[pageSize]": limit.toString(),
      sort: "publishedAt:desc",
    }

    const res = await fetch(buildUrl(path, params), { cache: "no-store" })
    const json = await res.json()

    return json.data as BlogPost[]
  } catch (error) {
    console.error("Error fetching recent blog posts:", error)
    return []
  }
}
