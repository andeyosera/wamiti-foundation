import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Get all projects
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "asc" },
    });

    // Keep only projects with local image paths, delete pexels ones
    const toDelete = projects.filter((p) =>
      p.imageUrls.some(
        (url) =>
          url.includes("pexels") ||
          url === "N/A" ||
          url === "" ||
          url.includes("8197527") ||
          url.includes("957024") ||
          url.includes("6646918")
      )
    );

    const ids = toDelete.map((p) => p.id);

    await prisma.project.deleteMany({
      where: { id: { in: ids } },
    });

    return NextResponse.json({
      success: true,
      deleted: ids.length,
      remaining: projects.length - ids.length,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to cleanup" }, { status: 500 });
  }
}