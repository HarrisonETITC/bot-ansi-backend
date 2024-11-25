import { Module } from '@nestjs/common';
import { TestController } from 'src/controllers/test/test.controller';
import { TestService } from 'src/services/test/test.service';

@Module({
    imports: [TestService],
    controllers: [TestController]
})
export class TestModule {}
