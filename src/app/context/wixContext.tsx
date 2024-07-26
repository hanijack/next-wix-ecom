"use client"
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie"
import { Children, createContext, ReactNode } from "react";

const refreshToken=JSON.parse(Cookies.get("refreshToken")|| "{}")
const wixClient = createClient({
    modules: {
      products,
      collections,
      
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  export type wixClient = typeof wixClient;


  export const WixClientContext = createContext<wixClient>(wixClient);
  export const WixPorvider= ({Children}:{children :ReactNode})=>{
    return(
        <WixClientContext.provider value={wixClient}>
            {Children}
        </WixClientContext.provider>
    )
  }