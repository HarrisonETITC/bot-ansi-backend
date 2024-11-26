import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { TestData } from 'src/controllers/test/test.controller';
import { LoginEntity } from 'src/orm/entities/login.entity';
import { TestEntity } from 'src/orm/entities/test.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TestService {
    repository: Repository<TestEntity>;

    constructor(
        @Inject(DataSource) public source: DataSource
    ) {
        this.repository = source.getRepository(TestEntity);
    }

    async createTestResult(data: TestData) {
        if (data.celular === '' || data.celular === undefined || data.celular === null)
            throw new BadRequestException('El número de teléfono es requerido para realizar esta operación');
        const loginInfo = await this.source.getRepository(LoginEntity).findOneBy({ numero_celular: data.celular });

        if (loginInfo == null)
            throw new BadRequestException(`No se encontró un usuario con el número de teléfono ${data.celular}`);

        data.login_id = loginInfo.id;

        const created = this.repository.create(data);

        return await this.repository.save(created);
    }
}
