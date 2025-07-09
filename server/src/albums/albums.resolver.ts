import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { AlbumsService } from "./albums.service";
import { Album } from "./entities/album.entity";

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Query(() => [Album], { name: "albums" })
  findAll() {
    return this.albumsService.findAll();
  }

  @Query(() => Album, { name: "album" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.albumsService.findOne(id);
  }

  @ResolveField()
  async artist(@Parent() album: Album) {
    return album.artist;
  }
}
