import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AuthEntity } from 'src/orm/entities/auth.entity';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { config } from 'dotenv';

export type ValidateUser = {
    username: string;
    password: string;
}

config();
@Injectable()
export class AuthService {
    repository: Repository<AuthEntity>;

    constructor(
        @Inject(DataSource) source: DataSource
    ) {
        this.repository = source.getRepository(AuthEntity);
    }

    async findAuthByEmailRol(email: string, rol: string) {
        if (email == null)
            email = '';
        if (rol == null)
            rol = '';
        return this.repository.findOneBy({ email, rol });
    }

    async findAuthByEmail(email: string) {
        if (email == null)
            email = '';
        return this.repository.findOneBy({ email });
    }

    async validateUser(user: ValidateUser) {
        const finded = await this.findAuthByEmail(user.username);

        if (finded == null || finded == undefined)
            throw new NotFoundException(`No se encontró un usuario con email: '${user.username}'`)

        if (!(await bcrypt.compare(user.password, finded.contrasena)))
            throw new BadRequestException(`La contraseña suministrada es incorrecta para el usuario con email: ${user.username}`)

        return finded;
    }

    async registerUser(auth: AuthEntity) {
        const newPass = await bcrypt.hash(auth.contrasena, await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS) ?? 10));
        auth.contrasena = newPass;
        const created = this.repository.create(auth);

        return this.repository.save(created);
    }
}
