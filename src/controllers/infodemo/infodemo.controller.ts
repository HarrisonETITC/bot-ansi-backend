import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/modules/auth/guards/jwt.guard';
import { InfoDemoEntity } from 'src/orm/entities/info_demo.entity';
import { InfodemoService } from 'src/services/infodemo/infodemo.service';

export type InfoDemoData = InfoDemoEntity & {
    celular: string;
}

@Controller('infodemo')
@UseGuards(JwtGuard)
export class InfodemoController {

    constructor(
        private readonly infoDemoService: InfodemoService
    ) { }

    @Post('register')
    async createInfoDemo(@Body() newInfoDemo: InfoDemoData) {
        console.log(await this.infoDemoService.registerInfoDemo(newInfoDemo));

        return { message: `Información del usuario ${newInfoDemo.celular} creada correctamente.` }
    }
}
