import { PrismaClient } from "@prisma/client";

export async function seedPlaylists(prisma: PrismaClient) {
  const users = await prisma.user.findMany();
  const songs = await prisma.song.findMany();

  for (const user of users) {
    const selectedSongs = songs.sort(() => 0.5 - Math.random()).slice(0, 5);

    await prisma.playlist.create({
      data: {
        name: `${user.displayName}'s Bangers`,
        creatorId: user.id,
        songs: {
          connect: selectedSongs.map((s) => ({ id: s.id })),
        },
      },
    });
  }

  console.log("📀 Seeded playlists");
}
