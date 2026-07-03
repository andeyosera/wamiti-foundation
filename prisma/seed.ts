import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Seed Projects
  await prisma.project.createMany({
    skipDuplicates: true,
    data: [
      {
        title: "Shinoyi Community Borehole Project",
        description:
          "Providing clean, reliable water access to over 500 households in Shinoyi, reducing the daily burden on women and children who previously walked long distances for water.",
        location: "Shinoyi",
        area: "Shinoyi Shikomari Ward",
        imageUrls: [
          "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
        ],
        impact: "500+ households with clean water access",
        featured: true,
      },
      {
        title: "Shikomari Tree Planting Initiative",
        description:
          "Over 10,000 indigenous trees planted across Shikomari to restore degraded land, combat soil erosion, and create a greener future for the next generation.",
        location: "Shikomari",
        area: "Shinoyi Shikomari Ward",
        imageUrls: [
          "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
        ],
        impact: "10,000+ trees planted",
        featured: true,
      },
      {
        title: "Youth Skills Empowerment Program",
        description:
          "A hands-on vocational training program equipping young people in the ward with tailoring, carpentry, and digital skills to build sustainable livelihoods.",
        location: "Shinoyi Shikomari Ward",
        area: "Shinoyi Shikomari Ward",
        imageUrls: [
          "https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg",
        ],
        impact: "200+ youth trained",
        featured: true,
      },
    ],
  });

  // Seed Admin
  const hashedPassword = await bcrypt.hash("wamiti@admin2024", 10);
  await prisma.admin.upsert({
    where: { email: "admin@wamitifoundation.org" },
    update: {},
    create: {
      email: "admin@wamitifoundation.org",
      password: hashedPassword,
    },
  });

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });