import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Album } from "src/albums/entities/album.entity";
import { Song } from "src/songs/entities/song.entity";
import { User } from "src/users/entities/user.entity";

@ObjectType()
export class Artist {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [Album])
  albums: Album[];

  @Field(() => [Song])
  songs: Song[];

  @Field(() => [User])
  fans: User[];
}
