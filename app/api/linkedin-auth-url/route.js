// src/app/api/linkedin-auth-url/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI; // Tu URL a donde LinkedIn enviará el 'code'
  const state = Math.random().toString(36).substring(2); // Generar un 'state' aleatorio

  const linkedinAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}&scope=w_member_social`;

  // Podrías guardar el `state` en memoria/DB si quieres validar, pero para este flujo no será obligatorio
  return NextResponse.json({ url: linkedinAuthUrl });
}
