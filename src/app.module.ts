import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TyepOrmConfig } from './config/ormconfig';
import { dbProviders } from './config/dbconfig';
import { AuthModule } from './modules/auth/auth.module';
import { LoginModule } from './modules/login/login.module';
import { InfodemoModule } from './modules/infodemo/infodemo.module';
import { TestModule } from './modules/test/test.module';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...TyepOrmConfig.optsmysql, autoLoadEntities: true }),
    AuthModule,
    LoginModule,
    InfodemoModule,
    TestModule,
    PassportModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...dbProviders
  ],
  exports: [
    ...dbProviders
  ]
})
export class AppModule { }
