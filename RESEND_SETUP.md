# 📧 Configuración de Resend para el Formulario de Contacto

Esta guía te ayudará a configurar Resend para gestionar los correos del formulario de contacto de tu portafolio.

## ¿Por qué Resend?

Resend es una plataforma moderna de correo electrónico diseñada para desarrolladores que ofrece:

✅ **Configuración simple** - No necesitas OAuth2 ni configuraciones complejas  
✅ **Alta entregabilidad** - Mejor tasa de entrega que servicios tradicionales  
✅ **Dominios personalizados** - Usa tu propio dominio verificado  
✅ **API moderna** - Fácil de usar y documentación excelente  
✅ **Gratuito para empezar** - 100 correos/día en el plan gratuito  

## 🚀 Pasos de Configuración

### 1. Crear una cuenta en Resend

1. Ve a [https://resend.com](https://resend.com)
2. Regístrate con tu email o GitHub
3. Verifica tu cuenta

### 2. Obtener tu API Key

1. Una vez dentro del dashboard, ve a **API Keys**
2. Haz clic en **Create API Key**
3. Dale un nombre descriptivo (ej: "Portafolio Contact Form")
4. Selecciona el permiso **Sending access**
5. Copia la API Key generada (¡solo se mostrará una vez!)

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz de tu proyecto:

```bash
# Copia el contenido de .env.example
cp .env.example .env.local
```

Edita `.env.local` y configura:

```env
# Tu API Key de Resend
RESEND_API_KEY=re_tu_api_key_aquí

# Email desde el que se enviarán los correos
# Para testing: onboarding@resend.dev
# Para producción: contacto@tudominio.com (requiere verificación)
RESEND_FROM_EMAIL=onboarding@resend.dev

# Email donde recibirás los mensajes del formulario
RESEND_TO_EMAIL=tu-email@gmail.com
```

### 4. (Opcional) Configurar Dominio Personalizado

Para usar un email personalizado como `contacto@tudominio.com`:

1. En el dashboard de Resend, ve a **Domains**
2. Haz clic en **Add Domain**
3. Ingresa tu dominio (ej: `tudominio.com`)
4. Agrega los registros DNS que te proporciona Resend en tu proveedor de dominio:
   - **MX Records** - Para recibir correos
   - **TXT Records** - Para autenticación SPF, DKIM y DMARC
5. Espera a que se verifique (puede tomar hasta 48 horas)
6. Una vez verificado, actualiza `RESEND_FROM_EMAIL=contacto@tudominio.com`

### 5. Reiniciar el Servidor de Desarrollo

```bash
pnpm dev
```

## 🧪 Probar el Formulario

1. Ve a tu portafolio en desarrollo: `http://localhost:3000`
2. Navega a la sección de contacto
3. Llena el formulario con datos de prueba
4. Envía el mensaje
5. Revisa tu email configurado en `RESEND_TO_EMAIL`

## 📊 Monitorear Correos Enviados

1. Ve al dashboard de Resend
2. En **Emails** puedes ver todos los correos enviados
3. Verifica el estado de entrega, aperturas, etc.

## ⚠️ Limitaciones del Plan Gratuito

- **100 correos/día**
- Solo puedes verificar **1 dominio**
- Email de origen limitado: `onboarding@resend.dev` o tu dominio verificado

Para más correos, considera actualizar al plan Pro ($20/mes con 50,000 correos).

## 🔧 Troubleshooting

### Error: "API key is required"
- Verifica que `RESEND_API_KEY` esté en tu `.env.local`
- Reinicia el servidor de desarrollo

### Error: "Email address is not allowed"
- Si usas un dominio personalizado, asegúrate de que esté verificado
- Para testing, usa `onboarding@resend.dev` como `RESEND_FROM_EMAIL`

### No recibo los correos
- Revisa tu carpeta de spam
- Verifica que `RESEND_TO_EMAIL` sea correcto
- Revisa los logs en el dashboard de Resend

## 📚 Recursos Útiles

- [Documentación oficial de Resend](https://resend.com/docs)
- [Guía de verificación de dominios](https://resend.com/docs/dashboard/domains/introduction)
- [API Reference](https://resend.com/docs/api-reference/introduction)
- [Status de Resend](https://status.resend.com/)

## 🎉 ¡Listo!

Tu formulario de contacto ahora está configurado con Resend. Los usuarios podrán enviarte mensajes directamente desde tu portafolio.

---

**Migración completada desde:** nodemailer + OAuth2  
**Beneficios obtenidos:** Configuración más simple, mejor entregabilidad, sin gestión de tokens
