import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@ArgsType()
export class GetUserArgs {
  @Field(() => [String])
  @IsArray()
  userIds: string[];
}
