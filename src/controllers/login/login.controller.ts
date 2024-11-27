import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/modules/auth/guards/jwt.guard';
import { LoginEntity } from 'src/orm/entities/login.entity';
import { LoginService } from 'src/services/login/login.service';

@Controller('login')
@UseGuards(JwtGuard)
export class LoginController {

    constructor(
        private readonly loginService: LoginService
    ) { }

    @Post('find')
    @HttpCode(HttpStatus.ACCEPTED)
    async findLoginByNumber(@Body() data: { numero_celular: string }) {
        const finded = await this.loginService.getByPhoneNumber(data.numero_celular);
        return { data: (finded == null) ? null : { id: finded.id, numero_celular: finded.numero_celular } };
    }

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async registerLogin(@Body() data: LoginEntity) {
        console.log(await this.loginService.create(data));

        return { message: "Usuario creado correctamente" };
    }
}
