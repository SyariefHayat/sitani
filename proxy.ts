import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Map each route prefix to the role(s) that are allowed to access it
const roleRouteMap: Record<string, string[]> = {
  "/distributor": ["distributor"],
  "/investasi": ["investor"],
  "/marketplace": ["pembeli"],
  "/academy": ["admin"],
  "/logistik": ["logistik"],
  "/dashboard": ["admin"],
};

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;

  // If the user is not logged in, redirect to login
  if (!isLoggedIn) {
    const loginUrl = new URL("/login", nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Check role-based access
  for (const [routePrefix, allowedRoles] of Object.entries(roleRouteMap)) {
    if (nextUrl.pathname.startsWith(routePrefix)) {
      if (!userRole || !allowedRoles.includes(userRole)) {
        // User doesn't have the right role — redirect to home
        return NextResponse.redirect(new URL("/", nextUrl.origin));
      }
      break;
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/distributor/:path*",
    "/investasi/:path*",
    "/marketplace/:path*",
    "/academy/:path*",
    "/logistik/:path*",
    "/article/:path*",
    "/dashboard/:path*",
  ],
};
