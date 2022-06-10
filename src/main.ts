import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston/dist/winston.constants';
import { AppModule } from './app.module';
import { GlobalHttpExceptionFilter } from './core/filters/http-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.useGlobalFilters(new GlobalHttpExceptionFilter());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
