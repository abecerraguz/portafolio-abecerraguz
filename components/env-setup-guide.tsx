"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react"

export default function EnvSetupGuide() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const envVars = `# Configuración de OAuth2 para Gmail
EMAIL_USER=info.bikeshoping@gmail.com
EMAIL_TO=email-destino@ejemplo.com
CLIENT_ID=tu-client-id-de-google
CLIENT_SECRET=tu-client-secret-de-google
REFRESH_TOKEN=tu-refresh-token-de-google
ACCESS_TOKEN=tu-access-token-de-google
`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(envVars)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-8">
      <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center">
        <span>Guía de configuración del formulario de contacto</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </Button>

      {isOpen && (
        <Card className="p-6 mt-4">
          <h3 className="text-lg font-semibold mb-4">Configuración del formulario de contacto con OAuth2 para Gmail</h3>

          <p className="mb-4">
            Para que el formulario de contacto funcione correctamente, necesitas configurar las siguientes variables de
            entorno en tu archivo <code>.env.local</code>:
          </p>

          <div className="relative">
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-4">
              <code>{envVars}</code>
            </pre>
            <Button size="sm" variant="ghost" className="absolute top-2 right-2" onClick={copyToClipboard}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </Button>
          </div>

          <h4 className="font-semibold mt-6 mb-2">Instrucciones para configurar OAuth2 con Gmail:</h4>

          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>
              Crea un archivo <code>.env.local</code> en la raíz de tu proyecto.
            </li>
            <li>Copia y pega las variables de entorno anteriores.</li>
            <li>
              Configura un proyecto en la{" "}
              <a
                href="https://console.cloud.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:underline"
              >
                Google Cloud Console
              </a>
              .
            </li>
            <li>Habilita la API de Gmail en tu proyecto de Google Cloud.</li>
            <li>Crea credenciales OAuth2 para una aplicación web.</li>
            <li>Configura los URI de redirección autorizados según sea necesario.</li>
            <li>Copia el Client ID y Client Secret a tus variables de entorno.</li>
            <li>Obtén el Refresh Token y Access Token siguiendo los pasos a continuación.</li>
          </ol>

          <h4 className="font-semibold mt-6 mb-2">Obtener Refresh Token y Access Token:</h4>

          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>
              Usa la{" "}
              <a
                href="https://developers.google.com/oauthplayground/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:underline"
              >
                OAuth 2.0 Playground
              </a>{" "}
              de Google.
            </li>
            <li>Haz clic en el icono de configuración (⚙️) en la esquina superior derecha.</li>
            <li>Marca "Use your own OAuth credentials".</li>
            <li>Ingresa tu Client ID y Client Secret.</li>
            <li>En el panel izquierdo, selecciona "Gmail API v1" y luego "https://mail.google.com/".</li>
            <li>Haz clic en "Authorize APIs" y sigue el proceso de autorización.</li>
            <li>Después de autorizar, haz clic en "Exchange authorization code for tokens".</li>
            <li>Copia el Refresh Token y Access Token generados a tus variables de entorno.</li>
          </ol>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md border-l-4 border-yellow-500 mt-6">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Nota importante:</h4>
            <p className="text-yellow-700 dark:text-yellow-200">
              El Access Token expira después de un tiempo (generalmente 1 hora). El código está configurado para usar el
              Refresh Token para obtener nuevos Access Tokens automáticamente, pero asegúrate de que tu Refresh Token
              sea válido y tenga los permisos correctos.
            </p>
          </div>
        </Card>
      )}
    </div>
  )
}

