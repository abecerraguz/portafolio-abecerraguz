export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (state !== "abc123xyz") {
    return new Response("Estado inválido", { status: 400 });
  }

  const res = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: "https://www.abecerraguz.com/api/linkedin-callback",
      client_id: process.env.LINKEDIN_CLIENT_ID,
      client_secret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
  });

  const data = await res.json();
  console.log("Access token:", data.access_token);

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
  
}
