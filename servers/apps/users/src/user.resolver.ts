import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterResponse } from './types/user.types';
import { RegisterDto } from './dto/user.dto';
import { User } from './entites/user.entity';
import { Response } from 'express';
@Resolver('User')
export class UserResolver {
  constructor(private readonly userServices: UsersService) {}
  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerDto') registerDto: RegisterDto,
    @Context() context: { response: Response },
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please Fill the all Fields');
    }
    const user = await this.userServices.register(
      registerDto,
      context.response,
    );
    return { user };
  }
  @Query(() => [User])
  async getAllUsers() {
    return this.userServices.getAllUsers();
  }
}
