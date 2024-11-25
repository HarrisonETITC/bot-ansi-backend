import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from 'src/controllers/login/login.controller';
import { LoginEntity } from 'src/orm/entities/login.entity';
import { LoginService } from 'src/services/login/login.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([LoginEntity])
    ],
    providers: [LoginService],
    controllers: [LoginController]
})
export class LoginModule { }
