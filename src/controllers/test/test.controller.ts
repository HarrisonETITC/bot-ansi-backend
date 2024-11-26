import { Body, Controller, Post } from '@nestjs/common';
import { TestEntity } from 'src/orm/entities/test.entity';
import { TestService } from 'src/services/test/test.service';

export type TestData = TestEntity & {
    celular: string;
}

@Controller('test')
export class TestController {

    constructor(
        private readonly testService: TestService
    ) { }

    @Post('register')
    async createTestResult(@Body() data: TestData) {
        console.log(await this.testService.createTestResult(data));

        return { message: `Ha generado un resultado de test para el usuario ${data.celular}` };
    }
}
