import { redirect } from 'next/navigation';
import { NextRequest,NextResponse } from 'next/server';


export function middleware(req,res) {
    if(req.nextUrl.pathname.startsWith('/api')) {
        console.log('thiss is API route')
    }  
    else {
        console.log('this is NOT')
    }
}


