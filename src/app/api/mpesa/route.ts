export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { stkPush } from "@/lib/mpesa";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, amount, name, email } = body;

    if (!phone || !amount || !name || !email) {
      return NextResponse.json(
        { error: "Phone, amount, name and email are required" },
        { status: 400 }
      );
    }

    if (amount < 1) {
      return NextResponse.json(
        { error: "Minimum contribution is KES 1" },
        { status: 400 }
      );
    }

    const contribution = await prisma.contribution.create({
      data: {
        name,
        email,
        phone,
        amount,
        paymentMethod: "mpesa",
        status: "pending",
      },
    });

    const mpesaResponse = await stkPush({
      phone,
      amount,
      accountRef: `WAMITI-${contribution.id.slice(0, 8).toUpperCase()}`,
    });

    // Log full Safaricom response
    console.log("MPESA RESPONSE:", JSON.stringify(mpesaResponse, null, 2));

    if (mpesaResponse.ResponseCode === "0") {
      return NextResponse.json({
        success: true,
        message:
          "STK Push sent! Please check your phone and enter your M-Pesa PIN.",
        contributionId: contribution.id,
        checkoutRequestId: mpesaResponse.CheckoutRequestID,
      });
    } else {
      return NextResponse.json(
        {
          error:
            mpesaResponse.errorMessage ||
            mpesaResponse.ResultDesc ||
            "Failed to initiate M-Pesa payment. Please try again.",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("M-Pesa error:", error);
    return NextResponse.json(
      { error: "Payment initiation failed. Please try again." },
      { status: 500 }
    );
  }
}