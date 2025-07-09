import { PrismaClient } from "@prisma/client";

export async function seedUsers(prisma: PrismaClient) {
  const users = [
    { username: "dev_girl_93", displayName: "Lana Codes" },
    { username: "graphqlOverlord", displayName: "Neo Schema" },
    { username: "admin_but_chill", displayName: "Chillmin" },
  ];

  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  console.log("👤 Seeded users");
}
