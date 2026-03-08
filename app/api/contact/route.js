import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  try {
    const data = await request.json();
    const { name = '', email = '', company = '', message = '' } = data || {};
    if (!email) {
      return NextResponse.json({ ok: false, error: 'Email required' }, { status: 400 });
    }

    if (!resend) {
      return NextResponse.json({ ok: true, note: 'Resend is not configured yet.' });
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@setugroups.com',
      to: process.env.TO_EMAIL || 'hello@setugroups.com',
      replyTo: email,
      subject: 'New inquiry — SETU Groups',
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
