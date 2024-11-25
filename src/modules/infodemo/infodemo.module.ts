import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfodemoController } from 'src/controllers/infodemo/infodemo.controller';
import { InfoDemoEntity } from 'src/orm/entities/info_demo.entity';
import { InfodemoService } from 'src/services/infodemo/infodemo.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([InfoDemoEntity])
    ],
    providers: [InfodemoService],
    controllers: [InfodemoController]
})
export class InfodemoModule { }
