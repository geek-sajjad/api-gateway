import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export class LoginDto {
  @IsEmail()
  // {
  //   allow_utf8_local_part: false,
  // },
  // {
  //   message: 'Email must be valid',
  // },
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(50)
  password: string;

  // @IsString()
  // @MaxLength(6)
  // @IsOptional()
  // totp?: string;
}
