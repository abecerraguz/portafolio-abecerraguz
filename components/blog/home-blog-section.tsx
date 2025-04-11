"use client"

import { Suspense } from "react"
import { Loading } from "@/components/ui/loading"
import dynamic from "next/dynamic"

// Importamos el componente de servidor de forma dinámica
const HomeBlogSectionServer = dynamic(
  () => import("./home-blog-section-server").then((mod) => ({ default: mod.HomeBlogSectionServer })),
  {
    ssr: true,
    loading: () => <Loading />,
  },
)

export function HomeBlogSection() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeBlogSectionServer />
    </Suspense>
  )
}
