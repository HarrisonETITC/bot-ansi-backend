import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InfoDemoData } from 'src/controllers/infodemo/infodemo.controller';
import { InfoDemoEntity } from 'src/orm/entities/info_demo.entity';
import { LoginEntity } from 'src/orm/entities/login.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class InfodemoService {
    repository: Repository<InfoDemoEntity>;

    constructor(
        @Inject(DataSource) public source: DataSource
    ) {
        this.repository = source.getRepository(InfoDemoEntity);
    }

    async registerInfoDemo(newInfoDemo: InfoDemoData) {
        if (newInfoDemo.celular === '' || newInfoDemo.celular === undefined || newInfoDemo.celular === null)
            throw new BadRequestException('El número de teléfono es requerido para realizar esta operación');
        const loginInfo = await this.source.getRepository(LoginEntity).findOneBy({ numero_celular: newInfoDemo.celular });

        if (loginInfo == null)
            throw new BadRequestException(`No se encontró un usuario con el número de teléfono ${newInfoDemo.celular}`);

        newInfoDemo.login_id = loginInfo.id;

        const created = this.repository.create(newInfoDemo);

        return await this.repository.save(created);
    }
}
