'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (command: string, id: string, config?: Record<string, any>) => void
  }
}

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    console.log("📊 Analytics mounted at:", pathname)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', 'G-M8Q7W58PFP', {
        page_path: pathname,
      })
    }
  }, [pathname])

  return null
}
