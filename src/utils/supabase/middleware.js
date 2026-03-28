import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const pathnameWithoutLocale = pathname.split("/").slice(2).join("/");

  const isProtectedRoute =
    pathnameWithoutLocale.startsWith("dashboard") ||
    pathnameWithoutLocale.startsWith("admin");

  if (!user && isProtectedRoute) {
    const locale = pathname.split("/")[1];
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/auth/login`;
    return NextResponse.redirect(url);
  }

  // Redirect logged-in users away from auth pages
  const isAuthRoute =
    pathnameWithoutLocale.startsWith("auth/login") ||
    pathnameWithoutLocale.startsWith("auth/register");

  if (user && isAuthRoute) {
    const locale = pathname.split("/")[1];
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/dashboard`;
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
