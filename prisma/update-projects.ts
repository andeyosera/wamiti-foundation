process.env.DATABASE_URL = "postgresql://postgres:uxzTqZHxsQny3dSO@db.ceobwgpphwedskevxnil.supabase.co:5432/postgres";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Delete old seeded projects
  await prisma.project.deleteMany({});

  // Create real projects with actual images
  await prisma.project.createMany({
    data: [
      {
        title: "Community Chicken Project",
        description:
          "Empowering local families in Shinoyi Shikomari through sustainable poultry farming, providing a reliable source of income and nutrition for households across the ward.",
        location: "Shinoyi",
        area: "Shinoyi Shikomari Ward",
        imageUrls: [
          "/images/projects/chicken/Chicken project 1.jpg",
          "/images/projects/chicken/Chicken project 2.jpg",
          "/images/projects/chicken/Chicken project 3.jpg",
        ],
        impact: "50+ families with sustainable income",
        featured: true,
      },
      {
        title: "Community Development Initiative",
        description:
          "A broad-based community development program addressing infrastructure, social welfare, and local economic empowerment across Shinoyi Shikomari Ward.",
        location: "Shinoyi Shikomari",
        area: "Shinoyi Shikomari Ward",
        imageUrls: [
          "/images/projects/community/Community development 1.jpg",
          "/images/projects/community/Community development 2.jpg",
          "/images/projects/community/Community development 3.jpg",
          "/images/projects/community/Community development 4.jpg",
          "/images/projects/community/Community development 5.jpg",
        ],
        impact: "1,000+ community members reached",
        featured: true,
      },
      {
        title: "Youth Empowerment Program",
        description:
          "Equipping young people in Shinoyi Shikomari with skills, mentorship, and opportunities to build sustainable livelihoods and lead positive change in their communities.",
        location: "Shinoyi Shikomari",
        area: "Shinoyi Shikomari Ward",
        imageUrls: [
          "/images/projects/youth/Youth empowerment 1.jpg",
          "/images/projects/youth/Youth empowerment 2.jpg",
        ],
        impact: "200+ youth empowered",
        featured: true,
      },
      {
        title: "Shikomari Tree Planting Initiative",
        description:
          "Over 10,000 indigenous trees planted across Shikomari to restore degraded land, combat soil erosion, and create a greener, healthier environment for generations to come.",
        location: "Shikomari",
        area: "Shinoyi Shikomari Ward",
        imageUrls: [
          "/images/projects/trees/Tree planting 1.jpg",
          "/images/projects/trees/Tree planting 2.jpg",
          "/images/projects/trees/Tree planting 3.jpg",
          "/images/projects/trees/Tree planting 4.jpg",
          "/images/projects/trees/Tree planting 5.jpg",
          "/images/projects/trees/Tree planting 6.jpg",
        ],
        impact: "10,000+ trees planted",
        featured: true,
      },
      {
        title: "School Infrastructure Project",
        description:
          "Improving learning environments for children in Shinoyi Shikomari through classroom construction, renovation, and provision of essential school materials and resources.",
        location: "Shinoyi",
        area: "Shinoyi Shikomari Ward",
        imageUrls: [
          "/images/projects/school/School project 1.jpg",
          "/images/projects/school/School project 2.jpg",
          "/images/projects/school/School project 3.jpg",
          "/images/projects/school/School project 4.jpg",
        ],
        impact: "500+ students with better learning spaces",
        featured: true,
      },
    ],
  });

  console.log("Projects updated successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });