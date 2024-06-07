import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BadRequestException, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterResponse } from './types/user.types';
import { RegisterDto } from './dto/user.dto';
import { User } from './entites/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userServices: UsersService) {}
  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerDto') registerDto: RegisterDto,
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please Fill the all Fields');
    }
    const user = await this.userServices.register(registerDto);
    return { user };
  }
  @Query(() => [User])
  async getAllUsers() {
    return this.userServices.getAllUsers();
  }
}
