import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as logs from 'morgan';

config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logs(process.env.LOGGER_TYPE ?? 'dev'))
  app.setGlobalPrefix('api');
  await app.listen(parseInt(process.env.PORT) ?? 3000);
}
bootstrap();
