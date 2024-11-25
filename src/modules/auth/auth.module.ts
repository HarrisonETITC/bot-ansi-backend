import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { config } from 'dotenv';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { AuthService } from 'src/services/auth/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtServiceImpl } from 'src/services/jwt/jwt-impl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from 'src/orm/entities/auth.entity';

config();
@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: `${process.env.JWT_SECRET ?? 'secret-jwt-kaskaks'}`
        }),
        TypeOrmModule.forFeature([AuthEntity])
    ],
    controllers: [AuthController],
    providers: [JwtService, AuthService, JwtServiceImpl, LocalStrategy, JwtStrategy]
})
export class AuthModule { }
