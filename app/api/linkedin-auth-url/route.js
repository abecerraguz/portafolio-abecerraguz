export async function GET() {
    const clientId = process.env.LINKEDIN_CLIENT_ID;
    const redirectUri = encodeURIComponent("https://www.abecerraguz.com/api/linkedin-callback");
    const state = "abc123xyz"; // idealmente generar dinámicamente y guardar en cookie o session
  
    const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=openid%20profile%20w_member_social&state=${state}`;
  
    return new Response(JSON.stringify({ url }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  