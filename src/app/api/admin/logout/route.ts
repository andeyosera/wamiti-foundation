export const runtime = "nodejs";
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect(
    new URL("/admin", process.env.NEXT_PUBLIC_APP_URL!)
  );
  response.cookies.delete("admin_token");
  return response;
}