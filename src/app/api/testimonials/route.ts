import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
 
const DB_NAME = process.env.MONGODB_DB as string;
const COLLECTION = "testimonials";
 
// GET /api/testimonials — returns only approved testimonials
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
 
    const testimonials = await db
      .collection(COLLECTION)
      .find({ status: "approved" })
      .sort({ createdAt: -1 })
      .toArray();
 
    return NextResponse.json(
      testimonials.map((t) => ({
        id: t._id.toString(),
        name: t.name,
        role: t.role,
        message: t.message,
        rating: t.rating || 5,
      }))
    );
  } catch (err) {
    console.error("GET /api/testimonials error:", err);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}
 
// POST /api/testimonials — saves a new testimonial with status: pending
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
  const { name, role, rating, message } = body;
 
  if (!name || !message || !rating) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }
 
  const client = await clientPromise;
  const db = client.db(DB_NAME);
 
  await db.collection(COLLECTION).insertOne({
    name: name.trim(),
      message: message.trim(),
      status: "pending",
      rating: Number(rating) || 5,
      createdAt: new Date(),
    });
 
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("POST /api/testimonials error:", err);
    return NextResponse.json({ error: "Failed to submit testimonial" }, { status: 500 });
  }
}