import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Name is Required' })
  @IsString({ message: 'Name must be a one string' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Password is Required' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @Field()
  @IsNotEmpty({ message: 'Email is Required' })
  @IsEmail()
  email: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Email is Required' })
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is Required' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
}
