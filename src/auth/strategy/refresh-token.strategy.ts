import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
// import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';
// import { User, UserDocument } from 'src/user/schema/user.schema';
// import * as argon from 'argon2';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'rt-jwt') {
  constructor(
    configService: ConfigService,
    // @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {
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
  // async validate(req, payload) {
  //   const user = await this.userModel.findOne({ _id: payload.sub });
  //   if (!user || !user.rtHash) {
  //     return false;
  //   }
  //   const refreshToken = req
  //     ?.get('authorization')
  //     ?.replace('Bearer', '')
  //     .trim();

  //   const result = await argon.verify(user.rtHash, refreshToken);
  //   if (!result) {
  //     return false;
  //   }
  //   return {
  //     ...payload,
  //     refreshToken,
  //   };
  // }
}
