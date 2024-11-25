import { Module } from '@nestjs/common';
import { InfodemoController } from 'src/controllers/infodemo/infodemo.controller';
import { InfodemoService } from 'src/services/infodemo/infodemo.service';

@Module({
    imports: [InfodemoService],
    controllers: [InfodemoController]
})
export class InfodemoModule { }
