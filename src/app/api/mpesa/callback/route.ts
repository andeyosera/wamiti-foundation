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
      const items = CallbackMetadata.Item;
      const mpesaCode = items.find(
        (i: any) => i.Name === "MpesaReceiptNumber"
      )?.Value;
      const phone = items.find(
        (i: any) => i.Name === "PhoneNumber"
      )?.Value?.toString();

      if (mpesaCode && phone) {
        // Find the pending contribution by phone and update it
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
  } catch (error) {
    console.error("M-Pesa callback error:", error);
    return NextResponse.json({ success: false });
  }
}