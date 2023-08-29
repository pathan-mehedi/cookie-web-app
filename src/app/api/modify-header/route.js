import { NextRequest, NextResponse } from 'next/server';

export async function modifyHeader(req) {
  const incomingHeaders = new Headers(req.headers);
  const token = incomingHeaders.get('Authorization');
  const newAuthorizationHeader = `Bearer ${token}`;

  incomingHeaders.set('Authorization', newAuthorizationHeader);

  return NextResponse.next({
    request: {
      headers: incomingHeaders,
    },
  });
}