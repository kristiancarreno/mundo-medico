import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'

import { getNextYear } from './locales/utils'
import { cookieI18Name, fallbackLng, languages } from './locales/lang'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware(req: NextRequest) {
  const lng = acceptLanguage.get(req.cookies.get(cookieI18Name)?.value) || fallbackLng
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-url', req.url)
  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
  response.cookies.set(cookieI18Name, lng, {
    expires: getNextYear()
  })
  return response
}
