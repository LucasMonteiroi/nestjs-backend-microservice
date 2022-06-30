import { WinstonConfigService, TypeOrmService } from '@config';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { HealthModule } from 'src/health/health.module';
import { MorganMiddleware } from './middlewares/morgan.middleware';
import helmet from 'helmet';

@Module({
  controllers: [],
  providers: [],
  imports: [
    WinstonModule.forRootAsync({
      useClass: WinstonConfigService,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HealthModule,
  ],
})
export class CoreModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        helmet({
          hidePoweredBy: true,
          xssFilter: true,
          crossOriginOpenerPolicy: false,
          crossOriginResourcePolicy: false,
        }),
        MorganMiddleware,
      )
      .forRoutes('*');
  }
}
