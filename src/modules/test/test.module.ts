import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from 'src/controllers/test/test.controller';
import { TestEntity } from 'src/orm/entities/test.entity';
import { TestService } from 'src/services/test/test.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TestEntity])
    ],
    providers: [TestService],
    controllers: [TestController]
})
export class TestModule {}
