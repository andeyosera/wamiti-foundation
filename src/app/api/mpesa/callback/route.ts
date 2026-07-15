import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { Body } = body;

    if (!Body?.stkCallback) {
      return NextResponse.json({ success: false });
    }

    const { ResultCode, CallbackMetadata } = Body.stkCallback;

    if (ResultCode === 0 && CallbackMetadata) {
      const items = CallbackMetadata.Item as Array<{ Name: string; Value: string | number }>;
      const mpesaCode = items.find((i) => i.Name === "MpesaReceiptNumber")?.Value as string;
      const phone = items.find((i) => i.Name === "PhoneNumber")?.Value?.toString();

      if (mpesaCode && phone) {
        await prisma.contribution.updateMany({
          where: {
            phone: { contains: phone.slice(-9) },
            status: "pending",
          },
          data: {
            mpesaCode,
            status: "completed",
          },
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false });
  }
}