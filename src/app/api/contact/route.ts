export const dynamic = "force-dynamic";
export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const message = await prisma.message.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        message: body.message,
      },
    });

    return NextResponse.json(
      { success: true, message },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}