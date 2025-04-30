// src/app/api/linkedin/callback/route.js
export async function POST(req) {
    const { code } = await req.json();
    
    const clientId = process.env.LINKEDIN_CLIENT_ID;
    const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
    const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
  
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    });
  
    try {
      const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
  
      const data = await response.json();
  
      if (data.access_token) {
        console.log('✅ Access Token obtenido:', data.access_token);
        return Response.json({ accessToken: data.access_token, expiresIn: data.expires_in });
      } else {
        console.error('Error al obtener access_token:', data);
        return new Response('Error', { status: 400 });
      }
    } catch (error) {
      console.error('Error general:', error);
      return new Response('Error', { status: 500 });
    }
  }
  