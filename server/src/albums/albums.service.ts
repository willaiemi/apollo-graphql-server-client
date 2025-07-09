import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class AlbumsService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.album.findMany({
      include: {
        artist: true,
        songs: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} album`;
  }
}
