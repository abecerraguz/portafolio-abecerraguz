"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, XCircle } from "lucide-react"

export function StrapiDebug() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [collection, setCollection] = useState("blog-posts")
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL

  const checkConnection = async () => {
    try {
      setStatus("loading")
      setMessage("Conectando con Strapi...")

      const response = await fetch(`${strapiUrl}/api/${collection}?pagination[pageSize]=1`)
      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(`Conexión exitosa. Encontrados ${data.meta?.pagination?.total || 0} elementos.`)
      } else {
        throw new Error(`Error ${response.status}: ${data.error?.message || response.statusText}`)
      }
    } catch (error) {
      setStatus("error")
      setMessage(`Error de conexión: ${error instanceof Error ? error.message : "Error desconocido"}`)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Depuración de Strapi</CardTitle>
        <CardDescription>Verifica la conexión con tu backend de Strapi</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">URL de Strapi:</p>
          <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded block text-sm overflow-x-auto">
            {strapiUrl || "No configurada"}
          </code>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Nombre de la colección:</p>
          <Input
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
            placeholder="Nombre de la colección (ej: blog-posts, articles)"
          />
        </div>

        {status !== "idle" && (
          <Alert variant={status === "success" ? "default" : status === "error" ? "destructive" : "default"}>
            <div className="flex items-center gap-2">
              {status === "loading" && (
                <div className="animate-spin h-5 w-5 border-2 border-blue-500 rounded-full border-t-transparent" />
              )}
              {status === "success" && <CheckCircle className="h-5 w-5 text-green-500" />}
              {status === "error" && <XCircle className="h-5 w-5" />}
              <AlertTitle>
                {status === "loading" && "Verificando..."}
                {status === "success" && "Conexión establecida"}
                {status === "error" && "Error de conexión"}
              </AlertTitle>
            </div>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={checkConnection} disabled={status === "loading" || !strapiUrl} className="w-full">
          Verificar conexión
        </Button>
      </CardFooter>
    </Card>
  )
}
