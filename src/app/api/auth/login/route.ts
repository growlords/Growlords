import { NextRequest, NextResponse } from 'next/server';
import {
  validateCredentials,
  createSessionToken,
  AUTH_COOKIE_NAME,
  SESSION_DURATION_SECONDS,
} from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body || {};

    if (!validateCredentials(username, password)) {
      return NextResponse.json(
        { success: false, error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    const token = await createSessionToken(username);

    const response = NextResponse.json({
      success: true,
      message: 'Authentication successful',
      user: { username },
    });

    // Set secure HTTP-only cookie
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_DURATION_SECONDS,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
