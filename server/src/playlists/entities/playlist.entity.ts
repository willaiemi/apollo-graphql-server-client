import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Song } from "src/songs/entities/song.entity";
import { User } from "src/users/entities/user.entity";

@ObjectType()
export class Playlist {
  @Field(() => ID)
  id: string;

  name: string;

  @Field(() => User)
  creator: User;

  @Field(() => [Song])
  songs: Song[];

  @Field(() => [User])
  likedBy: User[];
}
