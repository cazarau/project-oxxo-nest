import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from "@nestjs/jwt";
import { EXPIRES_IN, JWT_KEY } from './constants/jwt.constants';
import { User } from './entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: JWT_KEY,
    signOptions: {
      expiresIn: EXPIRES_IN,
    },
    global: true,
  })
],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
