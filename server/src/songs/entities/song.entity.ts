import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Album } from "src/albums/entities/album.entity";
import { Artist } from "src/artists/entities/artist.entity";
import { User } from "src/users/entities/user.entity";

@ObjectType()
export class Song {
  @Field(() => ID)
  id: string;

  title: string;

  @Field(() => Int)
  duration: number;

  @Field(() => Artist)
  artist: Artist;

  @Field(() => Album)
  album: Album;

  @Field(() => [User])
  likedBy: User[];
}
