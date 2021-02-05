import { Field, InputType } from '@nestjs/qraphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field()
  @IsOptional()
  age?: number;

  @Field()
  @IsOptional()
  isSubscribed?: boolean;
}
