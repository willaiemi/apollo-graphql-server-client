import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/dist/esm/plugin/landingPage/default";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule as GraphQLNestModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLNestModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
})
export class GraphQLModule {}
