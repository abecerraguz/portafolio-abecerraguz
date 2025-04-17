export interface StrapiResponse<T> {
  data: StrapiData<T>[]
  meta: StrapiMeta
}

export interface StrapiData<T> {
  id: number
  attributes: T
}

export interface StrapiMeta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export interface BlogPost {
  id: number
  documentId: string
  title: string
  content: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  coverImage?: {
    alternativeText?: string
    url: string
    formats?: {
      medium?: { url: string }
    }
  }
  category?: {
    name: string
  }
}

export interface BlogCategory {
  name: string
  slug: string
}

export interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}
