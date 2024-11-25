import { Body, Controller, HttpCode, HttpStatus, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { LocalGuard } from 'src/modules/auth/guards/local.guard';
import { AuthEntity } from 'src/orm/entities/auth.entity';
import { Request } from "express";
import { AuthService } from 'src/services/auth/auth.service';
import { JwtServiceImpl } from 'src/services/jwt/jwt-impl.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly jwtService: JwtServiceImpl
    ) { }

    /* @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async registerAuth(@Body() newAuth: AuthEntity) {
        await this.authService.registerUser(newAuth);

        return { message: "Usuario creado correctamente" }
    } */

    @Post('get-token')
    @UseGuards(LocalGuard)
    @HttpCode(HttpStatus.ACCEPTED)
    async generateToken(@Req() req: Request) {
        const logged = (req.user as AuthEntity);

        if (logged.rol !== 'administrador')
            throw new UnauthorizedException('Debe contar con un rol de administrador para poder realizar esta acción')

        return { token: await this.jwtService.generateToken(logged) };
    }
}
