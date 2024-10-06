import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Mock login: Check for hardcoded credentials
  if (username === 'guest' && password === 'guest123') {
    return NextResponse.json({
      message: 'Login successful',

    }, { status: 200 });
  } else {
    return NextResponse.json({
      message: 'Invalid credentials',
    }, { status: 401 });
  }
}