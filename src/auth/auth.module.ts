import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategy/access-token.strategy';
import { RefreshTokenStrategy } from './strategy/refresh-token.strategy';
// import { ConfirmModule } from 'src/confirm/confirm.module';
// import { UserModule } from 'src/user/user.module';
// import { AbilityModule } from 'src/ability/ability.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import { User, UserSchema } from 'src/user/schema/user.schema';
// import { Confirm, ConfirmSchema } from 'src/confirm/confirm.schema';
// import { BaseModule } from 'src/base/base.module';
// import { SessionModule } from 'src/session/session.module';

@Module({
  imports: [
    ConfigModule,
    // BaseModule,
    // MongooseModule.forFeature([
    //   {
    //     name: User.name,
    //     schema: UserSchema,
    //   },
    //   // {
    //   //   name: Confirm.name,
    //   //   schema: ConfirmSchema,
    //   // },
    // ]),
    // AbilityModule,
    JwtModule.register({}),
    // UserModule,
    // SessionModule,
  ],
  providers: [
    AuthService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    JwtService,
  ],
  controllers: [AuthController],
  exports: [AuthService, JwtService],
})
export class AuthModule {}
