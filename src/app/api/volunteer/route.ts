import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Name, email and phone are required" },
        { status: 400 }
      );
    }

    const volunteer = await prisma.volunteer.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        skills: body.skills || null,
        area: body.area || null,
      },
    });

    return NextResponse.json(
      { success: true, volunteer },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving volunteer:", error);
    return NextResponse.json(
      { error: "Failed to submit volunteer application" },
      { status: 500 }
    );
  }
}