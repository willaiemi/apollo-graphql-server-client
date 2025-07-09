import { PrismaClient } from "@prisma/client";

export async function seedSongs(prisma: PrismaClient) {
  const albums = await prisma.album.findMany({ include: { artist: true } });

  for (const album of albums) {
    for (let i = 1; i <= 5; i++) {
      await prisma.song.create({
        data: {
          title: `${album.title} Track ${i}`,
          duration: 180 + i * 5,
          albumId: album.id,
          artistId: album.artist.id,
        },
      });
    }
  }

  console.log("🎶 Seeded songs");
}
