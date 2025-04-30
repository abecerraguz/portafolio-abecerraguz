export async function POST(req) {
  const body = await req.json();
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;

  // Obtener perfil del usuario
  const profileRes = await fetch("https://api.linkedin.com/v2/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const profile = await profileRes.json();
  const userUrn = `urn:li:person:${profile.id}`;

  // Construir el mensaje para LinkedIn
  const { title, excerpt, imageUrl, slug, tags = [] } = body;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tublog.com";
  const blogUrl = `${siteUrl}/blog/${slug}`;

  const hashtags = tags.map(tag => `#${tag.replace(/\s+/g, '')}`).join(' ');

  const mensaje = `📝 ${title}

  ${excerpt}

  ${hashtags}

  👉 Lee más en: ${blogUrl}`;

  // Crear objeto para publicación
  const postBody = {
    author: userUrn,
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: {
          text: mensaje,
        },
        shareMediaCategory: imageUrl ? "IMAGE" : "NONE",
        media: imageUrl
          ? [
              {
                status: "READY",
                description: {
                  text: title,
                },
                media: imageUrl,
                title: {
                  text: title,
                },
              },
            ]
          : undefined,
      },
    },
    visibility: {
      "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
    },
  };

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
  return new Response(JSON.stringify(data));
}
