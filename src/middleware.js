import { NextResponse } from 'next/server';

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    let url = request.nextUrl.pathname
    if (url === "/"){
        return NextResponse.redirect(`${process.env.FRONTEND_URL}clientVisitor`)
    }
    
}