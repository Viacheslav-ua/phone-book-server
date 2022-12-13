import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString({ message: 'Should be a string' })
  @Length(2, 64, { message: 'Allowed from 2 to 64 characters' })
  readonly login: string;

  @ApiProperty()
  @IsString({ message: 'Should be a string' })
  @Length(2, 64, { message: 'Allowed from 2 to 64 characters' })
  readonly password: string;

  @ApiProperty()
  @IsOptional()
  @Length(4, 64, { message: 'Allowed from 2 to 64 characters' })
  @IsEmail()
  readonly email?: string;
}
