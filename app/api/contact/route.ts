import { NextRequest, NextResponse } from 'next/server';
import getMongoClient from '@/lib/mongodb';

interface ContactSubmission {
  name: string;
  email: string;
  whatsapp: string;
  country: string;
  type: string;
  message: string;
  createdAt: Date;
  source: string;
}

const VALID_TYPES = ['Investor', 'Client', 'Government', 'Talent'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, country, type, message } = body;

    // Basic server-side validation
    if (!name || !email || !whatsapp || !country || !type || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!VALID_TYPES.includes(type)) {
      return NextResponse.json(
        { error: 'Please select a valid contact type.' },
        { status: 400 }
      );
    }

    const submission: ContactSubmission = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      whatsapp: String(whatsapp).trim(),
      country: String(country).trim(),
      type: String(type).trim(),
      message: String(message).trim(),
      createdAt: new Date(),
      source: 'contact-page',
    };

    const client = await getMongoClient();
    const db = client.db('bigboss');
    const collection = db.collection<ContactSubmission>('contact_submissions');

    const result = await collection.insertOne(submission);

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving contact submission:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: view submissions at /api/contact (protect or remove before production)
export async function GET() {
  try {
    const client = await getMongoClient();
    const db = client.db('bigboss');
    const collection = db.collection<ContactSubmission>('contact_submissions');

    const submissions = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({ submissions }, { status: 200 });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}