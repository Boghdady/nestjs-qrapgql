import { Resolver } from '@nestjs/qraphql';

import User from './models/user';
import UserServices from './users.services';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userServices: UserServices) {}

  getUser(): User {}
}
