import { PrismaClient } from "@prisma/client";

export async function seedAlbums(prisma: PrismaClient) {
  const artists = await prisma.artist.findMany();

  for (const artist of artists) {
    await prisma.album.createMany({
      data: [
        { title: `Best of ${artist.name}`, year: 2020, artistId: artist.id },
        { title: `${artist.name} Live`, year: 2023, artistId: artist.id },
      ],
    });
  }

  console.log("💿 Seeded albums");
}
