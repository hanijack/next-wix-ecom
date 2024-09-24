import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";


export const wixClientServer=async()=>{

    const Cookies=cookies()
    const refreshTokens= JSON.parse(Cookies.get("refreshToken")?.value || "{}")
    const wixClient = createClient({
    modules: {
      products,
      collections,
      
    },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT,
      tokens: {
        refreshTokens,
          accessToken: { value: "", expiresAt: 0 },
      },
    }),
});

    return wixClient
}