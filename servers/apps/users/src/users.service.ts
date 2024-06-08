import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { PrismaService } from '../../../prisma/Prisma.service';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  //   register user service

  async register(registerDto: RegisterDto, response: Response) {
    const { name, email, password } = registerDto;

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return { user, response };
  }

  //   login user service
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    return { email, password };
  }

  //   get all users
  async getAllUsers() {
    return this.prisma.user.findMany();
  }
}
