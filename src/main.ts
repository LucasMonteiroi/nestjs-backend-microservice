import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalHttpExceptionFilter } from './core/filters/http-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalHttpExceptionFilter());

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
