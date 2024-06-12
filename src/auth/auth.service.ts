import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(dto: LoginDto) {
    // TODO: check is user exits in db then create accessToken for it
    // console.log('loginDto', dto);

    const accessToken = await this.jwtService.signAsync(
      {
        sub: 'userId',
        email: 'email',
      },
      {
        expiresIn: '30d',
        secret: this.configService.get<string>('JWT_KEY_ACCESS'),
      },
    );

    return {
      data: accessToken,
    };
  }

  async refresh() {
    const refreshToken = await this.jwtService.signAsync(
      {
        sub: 'userId',
        email: 'email',
      },
      {
        expiresIn: '30d',
        secret: this.configService.get<string>('JWT_KEY_ACCESS'),
      },
    );

    return {
      data: refreshToken,
    };
  }
}
