import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import { ROOT, LOGIN, PUBLIC_ROUTES } from "@/lib/routes";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export async function middleware(request) {
  const { nextUrl } = request;
  const session = await auth();

  const isAuthenticated = !!session?.user;
  console.log(isAuthenticated, nextUrl.pathname);

  const isPublicRouts = PUBLIC_ROUTES.find(
    (route) => nextUrl.pathname.startsWith(route) || nextUrl.pathname === ROOT
  );

  console.log(isPublicRouts);

  if (!isAuthenticated && !isPublicRouts) {
    return NextResponse.redirect(new URL(ROOT, nextUrl));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
