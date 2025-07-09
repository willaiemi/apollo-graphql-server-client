import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "./graphql/graphql.module";
import { ConfigModule } from "@nestjs/config";
import { AlbumsModule } from "./albums/albums.module";
import { ArtistsModule } from "./artists/artists.module";
import { PlaylistsModule } from "./playlists/playlists.module";
import { SongsModule } from "./songs/songs.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule,
    AlbumsModule,
    ArtistsModule,
    PlaylistsModule,
    SongsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
