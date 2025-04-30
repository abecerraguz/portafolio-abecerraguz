export async function POST(req) {
    const body = await req.json();
    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  
    // Obtener el ID del perfil de LinkedIn
    const profileRes = await fetch("https://api.linkedin.com/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    const profile = await profileRes.json();
    const userUrn = `urn:li:person:${profile.id}`;
  
    // Crear el post para publicar en LinkedIn
    const postBody = {
      author: userUrn,
      lifecycleState: "PUBLISHED",
      specificContent: {
        "com.linkedin.ugc.ShareContent": {
          shareCommentary: {
            text: body.mensaje || "Nuevo artículo en mi blog",
          },
          shareMediaCategory: "NONE",
        },
      },
      visibility: {
        "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
      },
    };
  
    const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0",
      },
      body: JSON.stringify(postBody),
    });
  
    const data = await res.json();
    return new Response(JSON.stringify(data));
  }
  