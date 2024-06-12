import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'rt-jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_KEY_REFRESH'),
      ignoreExpiration:
        configService.get('NODE_ENV') === 'development' ? true : false,
      passReqToCallback: true,
    });
  }

  validate(payload: IJwtPayload) {
    return { payload };
  }
}
