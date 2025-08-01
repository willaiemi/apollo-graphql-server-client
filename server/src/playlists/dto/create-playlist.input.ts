import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlaylistInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
