// src/lib/getAccessToken.ts
import { google } from "googleapis"

export async function getAccessToken() {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground" // o tu redirect URI real
  )

  oAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  })

  const { token } = await oAuth2Client.getAccessToken()
  return token
}
