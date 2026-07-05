import { Resend } from 'resend';
import type { RequestEvent } from '@sveltejs/kit';
import { RESEND_API_KEY, CONTACT_EMAIL_TO } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export async function POST({ request }: RequestEvent) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    if (message.length > 5000) {
      return new Response(JSON.stringify({ error: 'Message too long' }), { status: 400 });
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: CONTACT_EMAIL_TO || 'diegosamuel042@gmail.com',
      subject: `[Portfolio] ${name} — ${email}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
