export const dynamic = "force-dynamic";
export const dynamic = "force-dynamic";
import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, location, area, impact, description } = body;

    if (!title || !location) {
      return NextResponse.json(
        { error: "Title and location are required" },
        { status: 400 }
      );
    }

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are a compassionate storyteller for Wamiti Foundation, an NGO based in Shinoyi Shikomari Ward, Kakamega County, Kenya. 

Write a warm, hopeful, and emotionally engaging project impact story based on these details:

Project Title: ${title}
Location: ${location}
Area: ${area || "Shinoyi Shikomari Ward"}
Impact: ${impact || "Not specified"}
Basic Description: ${description}

Requirements:
- Write 2-3 paragraphs
- Use warm, hopeful language that spreads hope
- Focus on the human impact — real people, real lives changed
- Mention the specific location naturally
- Do NOT mention any politician or political affiliation
- End with a forward-looking sentence about continued impact
- Keep it authentic and grounded, not overly dramatic
- Write in English but feel free to use one or two Swahili words naturally (like "karibu", "pamoja", "asante")

Return ONLY the story text, no titles or headings.`,
        },
      ],
    });

    const story =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ story });
  } catch (error) {
    console.error("AI generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate story" },
      { status: 500 }
    );
  }
}