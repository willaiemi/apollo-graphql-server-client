import { PrismaClient } from "@prisma/client";
import { seedUsers } from "../users/users.seed";
import { seedArtists } from "../artists/artists.seed";
import { seedAlbums } from "../albums/albums.seed";
import { seedSongs } from "../songs/songs.seed";
import { seedPlaylists } from "../playlists/playlists.seed";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  await prisma.$transaction(async (tx) => {
    await tx.album.deleteMany({});
    await tx.artist.deleteMany({});
    await tx.playlist.deleteMany({});
    await tx.song.deleteMany({});
    await tx.user.deleteMany({});
    console.log("🗑️ Cleared existing data...");

    // @ts-expect-error i dont really know
    await seedUsers(tx);
    // @ts-expect-error i dont really know
    await seedArtists(tx);
    // @ts-expect-error i dont really know
    await seedAlbums(tx);
    // @ts-expect-error i dont really know
    await seedSongs(tx);
    // @ts-expect-error i dont really know
    await seedPlaylists(tx);
  });

  console.log("✅ Seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Error while seeding:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
