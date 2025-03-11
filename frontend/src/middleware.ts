import { NextRequest, NextResponse } from 'next/server'
import { auth } from './auth'

export default async function Middleware(req: NextRequest) {
  const session = await auth()

  if (!session) {
    NextResponse.redirect(new URL('/', req.url))
  }

  NextResponse.next()
}

export const config = {
  matcher: ['/:path*', '/((?!api/auth).*)', '/((?!signin).*)'],
}
