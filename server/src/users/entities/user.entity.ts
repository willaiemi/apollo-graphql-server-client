import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Artist } from "src/artists/entities/artist.entity";
import { Playlist } from "src/playlists/entities/playlist.entity";
import { Song } from "src/songs/entities/song.entity";

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  username: string;

  @Field({ nullable: true })
  displayName?: string;

  @Field(() => [Song])
  likedSongs: Song[];

  @Field(() => [Artist])
  likedArtists: Artist[];

  @Field(() => [Playlist])
  playlists: Playlist[];

  @Field(() => [User])
  followedBy: User[];

  @Field(() => [User])
  following: User[];
}
