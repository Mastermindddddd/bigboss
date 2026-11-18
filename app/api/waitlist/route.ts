import { NextRequest, NextResponse } from 'next/server';
import getMongoClient from '@/lib/mongodb';

interface WaitlistEntry {
  email: string;
  createdAt: Date;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Please provide an email address.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanEmail = String(email).trim().toLowerCase();

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const client = await getMongoClient();
    const db = client.db('bigboss');
    const collection = db.collection<WaitlistEntry>('waitlist');

    // Prevent duplicate sign-ups
    const existing = await collection.findOne({ email: cleanEmail });
    if (existing) {
      return NextResponse.json(
        { success: true, message: 'You\'re already on the list.' },
        { status: 200 }
      );
    }

    const entry: WaitlistEntry = {
      email: cleanEmail,
      createdAt: new Date(),
      source: 'products-page',
    };

    const result = await collection.insertOne(entry);

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving waitlist entry:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: view waitlist at /api/waitlist (protect or remove before production)
export async function GET() {
  try {
    const client = await getMongoClient();
    const db = client.db('bigboss');
    const collection = db.collection<WaitlistEntry>('waitlist');

    const entries = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(500)
      .toArray();

    return NextResponse.json({ entries, count: entries.length }, { status: 200 });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}