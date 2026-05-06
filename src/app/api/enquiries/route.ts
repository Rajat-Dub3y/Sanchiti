import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Enquiry from '@/models/Enquiry';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      message,
    });

    return NextResponse.json(enquiry, { status: 201 });
  } catch (error) {
    console.error('Enquiry creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
