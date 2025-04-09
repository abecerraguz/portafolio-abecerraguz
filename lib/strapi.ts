const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || ""

export const getStrapiURL = (path = "") => {
  return `${STRAPI_URL}${path}`
}

export const getStrapiMedia = (url: string | null) => {
  if (!url) return null
  if (url.startsWith("http") || url.startsWith("//")) return url
  return `${STRAPI_URL}${url}`
}

export async function fetchAPI<T>(
  path: string,
  urlParamsObject: Record<string, any> = {},
  options: RequestInit = {}
): Promise<T> {
  const urlParams = new URLSearchParams(urlParamsObject).toString()
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") || ""
  const requestUrl = `${baseUrl}/api${path}?${urlParams}`

  const res = await fetch(requestUrl, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store", // útil para desarrollo
  })

  if (!res.ok) {
    throw new Error(`Strapi API error: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()

  // 🧠 Si json.data es un array con attributes, lo aplanamos
  if (Array.isArray(json.data) && json.data[0]?.attributes) {
    return {
      ...json,
      data: json.data.map((item: any) => ({
        id: item.id,
        ...item.attributes,
      })),
    } as T
  }

  // 🧠 Si json.data es un objeto único con attributes
  if (json.data?.attributes) {
    return {
      ...json,
      data: {
        id: json.data.id,
        ...json.data.attributes,
      },
    } as T
  }

  // 👌 Si los datos ya vienen planos, los dejamos así
  return json as T
}