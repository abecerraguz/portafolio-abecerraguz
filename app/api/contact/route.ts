import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    // Obtener los datos del formulario
    const { name, email, subject, message } = await request.json()

    // Validar que todos los campos requeridos estén presentes
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 })
    }

    console.log('Salida de process.env.EMAIL_USER--->', process.env.EMAIL_USER)

    // Configurar el transporter de Nodemailer con OAuth2 para Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER || "abcerraguz@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
      },
    })

    // Verificar la configuración del transporter
    await transporter.verify().catch((error: Error) => {
      console.error("Error al verificar el transporter:", error)
      throw new Error("Error de configuración del servidor de correo")
    })

    // Configurar el correo electrónico
    const mailOptions = {
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER || "abcerraguz@gmail.com"}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER || "abcerraguz@gmail.com",
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Asunto: ${subject}
        
        Mensaje:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #10b981; border-radius: 4px;">
            <p><strong>Mensaje:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    }

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions)

    // Responder con éxito
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error al enviar el correo:", error)
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
  }
}

