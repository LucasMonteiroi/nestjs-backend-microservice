import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { TypeOrmService, WinstonConfigService } from './config';
import { HealthModule } from './health/health.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
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
    TasksModule,
  ],
  providers: [Logger],
})
export class AppModule {}
