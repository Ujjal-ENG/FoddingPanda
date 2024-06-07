import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  //   register user service

  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    return { name, email, password };
  }

  //   login user service
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    return { email, password };
  }
}
