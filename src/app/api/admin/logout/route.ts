export const dynamic = "force-dynamic";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect(
    "https://wamiti-foundation-git-main-andeyoseras-projects.vercel.app/admin"
  );
  response.cookies.delete("admin_token");
  return response;
}