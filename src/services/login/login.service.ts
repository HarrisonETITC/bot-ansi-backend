import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { LoginEntity } from 'src/orm/entities/login.entity';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
    repository: Repository<LoginEntity>;

    constructor(
        @Inject(DataSource) source: DataSource
    ) {
        this.repository = source.getRepository(LoginEntity);
    }

    async getByPhoneNumber(number: string) {
        return await this.repository.findOneBy({ numero_celular: number });
    }

    async create(newLogin: LoginEntity) {
        if (newLogin.numero_celular === undefined || newLogin.numero_celular === null || newLogin.numero_celular === '')
            throw new BadRequestException('Debe proveer el número de celular para poder registrar al usuario');
        if (newLogin.contrasena === undefined || newLogin.contrasena === null || newLogin.contrasena === '')
            throw new BadRequestException('Debe proveer una contraseña para poder registrar al usuario');
        
        const newPass = await bcrypt.hash(newLogin.contrasena, await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS) ?? 10));
        newLogin.contrasena = newPass;

        const created = this.repository.create(newLogin);

        return await this.repository.save(created);
    }
}
