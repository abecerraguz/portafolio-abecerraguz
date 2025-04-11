"use client"

import { useState, useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle } from "lucide-react"

export function StrapiConnectionDebug() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL

  useEffect(() => {
    const checkConnection = async () => {
      try {
        setStatus("loading")
        const response = await fetch(`${strapiUrl}/api/blog-posts?pagination[pageSize]=1`)

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        setStatus("success")
        setMessage(`Conexión exitosa. Encontrados ${data.meta.pagination.total} artículos.`)
      } catch (error) {
        setStatus("error")
        setMessage(`Error de conexión: ${error instanceof Error ? error.message : "Error desconocido"}`)
      }
    }

    checkConnection()
  }, [strapiUrl])

  return (
    <div className="my-4">
      <Alert variant={status === "success" ? "default" : "destructive"}>
        <div className="flex items-center gap-2">
          {status === "loading" && (
            <div className="animate-spin h-5 w-5 border-2 border-blue-500 rounded-full border-t-transparent" />
          )}
          {status === "success" && <CheckCircle className="h-5 w-5 text-green-500" />}
          {status === "error" && <XCircle className="h-5 w-5" />}
          <AlertTitle>
            {status === "loading" && "Verificando conexión con Strapi..."}
            {status === "success" && "Conexión establecida"}
            {status === "error" && "Error de conexión"}
          </AlertTitle>
        </div>
        <AlertDescription>{message}</AlertDescription>
      </Alert>

      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        URL de Strapi: {strapiUrl || "No configurada"}
      </div>
    </div>
  )
}
