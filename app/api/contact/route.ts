import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string | undefined>;
  const requiredFields = ['firstName', 'lastName', 'email', 'company', 'message'];

  for (const field of requiredFields) {
    if (!body[field]?.trim()) {
      return NextResponse.json({ message: 'Please complete all required fields.' }, { status: 400 });
    }
  }

  const email = body.email?.trim() || '';
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!validEmail) {
    return NextResponse.json({ message: 'Please enter a valid work email address.' }, { status: 400 });
  }

  console.log('SETU contact inquiry', body);

  return NextResponse.json({
    message: 'Thanks. Your request has been submitted and is ready to route into your email or CRM integration.',
  });
}
