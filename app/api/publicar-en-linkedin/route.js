export async function POST(req) {
  const body = await req.json();
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const { title, excerpt, imageUrl, slug, tags = [], isTest = false } = body;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tublog.com";
  const blogUrl = `${siteUrl}/blog/${slug}`;
  const hashtags = tags.map(tag => `#${tag.replace(/\s+/g, '')}`).join(' ');

  const mensaje = `📝 ${title}

${excerpt}

${hashtags}

👉 Lee más en: ${blogUrl}`;

  let userUrn = "urn:li:member:test";

  if (!isTest) {
    // Solo obtener el perfil si NO es prueba
    const profileRes = await fetch("https://api.linkedin.com/v2/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const profile = await profileRes.json();
    if (!profile.id) {
      console.error("Error: No se pudo obtener el ID del perfil", profile);
      return new Response(
        JSON.stringify({ success: false, message: "Error: No se pudo obtener el ID del perfil", profile }),
        { status: 500 }
      );
    }
    userUrn = `urn:li:member:${profile.id}`;
  }

  const postBody = {
    author: userUrn,
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: {
          text: mensaje,
        },
        shareMediaCategory: "NONE",
      },
    },
    visibility: {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
    },
  };

  if (isTest) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "Modo de prueba activado. Esta es la carga que se enviaría a LinkedIn.",
        postBody,
      }),
      { status: 200 }
    );
  }

  // Publicar en LinkedIn
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

  if (res.ok) {
    return new Response(
      JSON.stringify({
        success: true,
        message: "¡Publicado en LinkedIn correctamente!",
        postId: data.id,
      }),
      { status: 200 }
    );
  } else {
    console.error("Error al publicar en LinkedIn:", data);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error al publicar en LinkedIn",
        error: data,
      }),
      { status: res.status }
    );
  }
}
