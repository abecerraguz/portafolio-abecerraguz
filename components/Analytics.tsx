'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, id: string, config?: Record<string, any>) => void
  }
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams.toString()}`
    window.gtag('config', 'G-M8Q7W58PFP', {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}
