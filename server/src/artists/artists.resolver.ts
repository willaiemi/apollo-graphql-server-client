import { Args, ID, Query, Resolver } from "@nestjs/graphql";
import { ArtistsService } from "./artists.service";
import { Artist } from "./entities/artist.entity";

@Resolver(() => Artist)
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  // @Mutation(() => Artist)
  // createArtist(@Args('createArtistInput') createArtistInput: CreateArtistInput) {
  //   return this.artistsService.create(createArtistInput);
  // }

  @Query(() => [Artist], { name: "artists" })
  findAll() {
    return this.artistsService.findAll();
  }

  @Query(() => Artist, { name: "artist" })
  findOne(@Args("id", { type: () => ID }) id: string) {
    return this.artistsService.findOne(id);
  }

  // @Mutation(() => Artist)
  // updateArtist(@Args('updateArtistInput') updateArtistInput: UpdateArtistInput) {
  //   return this.artistsService.update(updateArtistInput.id, updateArtistInput);
  // }

  // @Mutation(() => Artist)
  // removeArtist(@Args('id', { type: () => Int }) id: number) {
  //   return this.artistsService.remove(id);
  // }
}
