import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Artist } from "src/artists/entities/artist.entity";
import { Song } from "src/songs/entities/song.entity";

@ObjectType()
export class Album {
  @Field(() => ID)
  id: string;

  title: string;

  @Field(() => Int)
  year: number;

  @Field(() => Artist)
  artist: Artist;

  @Field(() => [Song])
  songs: Song[];
}
