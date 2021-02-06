import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { DeleteUserInput } from './dto/input/delete-user-input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './models/user';
import { UserService } from './users.services';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userServices: UserService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.userServices.getUser(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.userServices.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.userServices.createUser(createUserData);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.userServices.updateUser(updateUserData);
  }

  @Mutation(() => User)
  deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
    return this.userServices.deleteUser(deleteUserData);
  }
}
