import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TyepOrmConfig } from './config/ormconfig';
import { dbProviders } from './config/dbconfig';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { LoginModule } from './login/login.module';
import { LoginModule } from './modules/login/login.module';
import { LoginController } from './controllers/login/login.controller';
import { LoginService } from './services/login/login.service';
import { InfodemoModule } from './infodemo/infodemo.module';
import { InfodemoModule } from './modules/infodemo/infodemo.module';
import { InfodemoController } from './controllers/infodemo/infodemo.controller';
import { InfodemoService } from './services/infodemo/infodemo.service';
import { TestModule } from './modules/test/test.module';
import { TestController } from './controllers/test/test.controller';
import { TestService } from './services/test/test.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...TyepOrmConfig.optsmysql, autoLoadEntities: true }),
    AuthModule,
    LoginModule,
    InfodemoModule,
    TestModule
  ],
  controllers: [AppController, AuthController, LoginController, InfodemoController, TestController],
  providers: [
    ...dbProviders,
    AuthService,
    LoginService,
    InfodemoService,
    TestService
  ],
  exports: [
    ...dbProviders
  ]
})
export class AppModule { }
