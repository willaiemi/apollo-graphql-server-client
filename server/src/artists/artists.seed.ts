import { PrismaClient } from "@prisma/client";

export async function seedArtists(prisma: PrismaClient) {
  const artists = [
    { name: "The NullPointers" },
    { name: "404 & The Not Founds" },
    { name: "Bug Direction" },
    { name: "The Rolling Codes" },
    { name: "Async Awaiters" },
  ];

  for (const artist of artists) {
    await prisma.artist.create({ data: artist });
  }

  console.log("🎸 Seeded artists");
}
