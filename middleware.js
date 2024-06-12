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
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);

  if (!isAuthenticated && !isPublicRouts) {
    return NextResponse.redirect(new URL(ROOT, nextUrl));
  }
  return NextResponse.next({ headers });
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
