//import createMiddleware from 'next-intl/middleware';

import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from 'next/server'

const excludes = ['/', '/courses', '/blog', '/faq', '/contact'];
const excludesStartWith = ['/_next/static/', '/images', '/fonts', '/version'];

export default async function middleware(
     req: NextRequest
) {
    if(excludes.includes(req.nextUrl.pathname)) {
      return NextResponse.next();
    }

    for(let idx in excludesStartWith) {
      if(req.nextUrl.pathname.startsWith(excludesStartWith[idx])) {
        return NextResponse.next();
      }
    }

    return await withAuth(req, {
      pages: {
        signIn: '/auth/signin',
        signOut: "/auth/signout",
      },
    });
}