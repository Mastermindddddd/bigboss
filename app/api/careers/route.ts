import { NextRequest, NextResponse } from 'next/server';
import getMongoClient from '@/lib/mongodb';

interface CareerApplication {
  name: string;
  email: string;
  whatsapp: string;
  country: string;
  role: string;
  message: string;
  createdAt: Date;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, country, role, message } = body;

    // Basic server-side validation
    if (!name || !email || !whatsapp || !country || !role) {
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

    const application: CareerApplication = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      whatsapp: String(whatsapp).trim(),
      country: String(country).trim(),
      role: String(role).trim(),
      message: message ? String(message).trim() : '',
      createdAt: new Date(),
      source: 'careers-page',
    };

    const client = await getMongoClient();
    const db = client.db('bigboss');
    const collection = db.collection<CareerApplication>('career_applications');

    const result = await collection.insertOne(application);

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving career application:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: lets you view submissions at /api/careers (protect this in production)
export async function GET() {
  try {
    const client = await getMongoClient();
    const db = client.db('bigboss');
    const collection = db.collection<CareerApplication>('career_applications');

    const applications = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({ applications }, { status: 200 });
  } catch (error) {
    console.error('Error fetching career applications:', error);
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}