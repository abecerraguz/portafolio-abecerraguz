'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (command: string, id: string, config?: Record<string, any>) => void
  }
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Marcar que ya estamos en el cliente
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const url = `${pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', 'G-M8Q7W58PFP', {
        page_path: url,
      })
    }
  }, [isClient, pathname, searchParams])

  return null
}
