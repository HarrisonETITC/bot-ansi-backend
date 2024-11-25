import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { AuthEntity } from 'src/orm/entities/auth.entity';
import { JwtService } from '@nestjs/jwt';

config();
@Injectable()
export class JwtServiceImpl {

    constructor(
        private readonly jwtService: JwtService
    ) { }

    async generateToken(auth: AuthEntity): Promise<string> {
        const signUser: { id: string, email: string } = { id: auth.id, email: auth.email };

        return await this.jwtService.signAsync(signUser, { expiresIn: '1w', secret: process.env.JWT_SECRET });
    }
}