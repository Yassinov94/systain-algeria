import { NextResponse } from "next/server";
import { i18n } from "./i18n-config";
import { updateSession } from "@/utils/supabase/middleware";

function getLocale(request) {
  try {
    const acceptLanguage = request.headers.get("accept-language") || "";
    for (const locale of i18n.locales) {
      if (acceptLanguage.toLowerCase().includes(locale)) {
        return locale;
      }
    }
    return i18n.defaultLocale;
  } catch {
    return i18n.defaultLocale;
  }
}

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|fonts|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)",
  ],
};
