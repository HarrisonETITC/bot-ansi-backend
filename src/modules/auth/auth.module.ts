import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { AuthService } from 'src/services/auth/auth.service';

config();
@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: `${process.env.JWT_SECRET ?? 'secret-jwt-kaskaks'}`
        }),
        AuthService
    ],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule { }
