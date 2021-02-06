import { Module } from '@nestjs/common';

import { UserResolver } from './users.resolver';
import { UserService } from './users.services';

@Module({
  providers: [UserService, UserResolver],
})
export class UsersModule {}
