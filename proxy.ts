import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Di Next.js 16, Auth.js mengekspor fungsi auth yang diganti nama menjadi proxy
export const { auth: proxy } = NextAuth(authConfig);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};