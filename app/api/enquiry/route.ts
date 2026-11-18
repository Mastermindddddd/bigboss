import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (!payload || !payload.name || !payload.email || !payload.details) {
    return NextResponse.json({ message: 'Please complete the required enquiry fields.' }, { status: 400 });
  }

  const webhookUrl = process.env.BIGBOSS_ENQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      {
        message: 'Online enquiry delivery is not configured on this deployment yet. Please use the email or WhatsApp option on the page.',
      },
      { status: 503 },
    );
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: 'bigbosscorporate.com',
      receivedAt: new Date().toISOString(),
      ...payload,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ message: 'We could not deliver the enquiry online. Please use email or WhatsApp.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
