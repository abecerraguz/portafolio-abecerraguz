"use client"

import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Loader2, AlertCircle } from "lucide-react"
import SuccessModal from "./success-modal"

// Esquema de validación con Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nombre demasiado corto")
    .max(50, "Nombre demasiado largo")
    .required("El nombre es obligatorio"),
  email: Yup.string().email("Email inválido").required("El email es obligatorio"),
  subject: Yup.string()
    .min(5, "Asunto demasiado corto")
    .max(100, "Asunto demasiado largo")
    .required("El asunto es obligatorio"),
  message: Yup.string()
    .min(10, "Mensaje demasiado corto")
    .max(1000, "Mensaje demasiado largo")
    .required("El mensaje es obligatorio"),
})

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setFormStatus("submitting")
    setErrorMessage("")

    try {
      // Enviar datos al endpoint de la API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje")
      }

      setFormStatus("success")
      resetForm()
      setShowSuccessModal(true)
    } catch (error: any) {
      console.error("Error al enviar el formulario:", error)
      setFormStatus("error")
      setErrorMessage(error.message || "Error al enviar el mensaje. Inténtalo de nuevo más tarde.")
    }
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
    setFormStatus("idle")
  }

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.name && touched.name
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400`}
                  aria-required="true"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.email && touched.email
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400`}
                  aria-required="true"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Asunto <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                id="subject"
                name="subject"
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.subject && touched.subject
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400`}
              />
              <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Mensaje <span className="text-red-500">*</span>
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={5}
                className={`w-full px-4 py-2 rounded-md border ${
                  errors.message && touched.message
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400`}
                aria-required="true"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <Button
              type="submit"
              className={`w-full ${
                !(isValid && dirty) || formStatus === "submitting"
                  ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-lime-500 to-amber-500 hover:from-lime-600 hover:to-amber-600"
              } text-white border-0`}
              disabled={!(isValid && dirty) || formStatus === "submitting"}
            >
              {formStatus === "submitting" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : formStatus === "error" ? (
                <>
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Intentar de nuevo
                </>
              ) : (
                "Enviar mensaje"
              )}
            </Button>
            {formStatus === "error" && (
              <div className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                {errorMessage || "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."}
              </div>
            )}
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
              Los campos marcados con <span className="text-red-500">*</span> son obligatorios
            </div>
          </Form>
        )}
      </Formik>

      <SuccessModal isOpen={showSuccessModal} onClose={closeSuccessModal} />
    </>
  )
}

