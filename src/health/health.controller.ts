import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import {
  DiskHealthIndicator,
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly typeOrmIndicator: TypeOrmHealthIndicator,
    private readonly diskHealthIndicator: DiskHealthIndicator,
    private readonly memoryHealthIndicator: MemoryHealthIndicator,
  ) {}

  @Get('/database')
  @HealthCheck()
  async checkDatabases() {
    try {
      const check = await this.health.check([
        () => this.typeOrmIndicator.pingCheck('typeorm'),
      ]);

      return check;
    } catch (e) {
      throw new InternalServerErrorException({
        statusCode: 500,
        message: 'http.serverError.internalServerError',
      });
    }
  }

  @Get('/storage')
  async checkStorage() {
    try {
      return this.health.check([
        () =>
          this.diskHealthIndicator.checkStorage('disk health', {
            thresholdPercent: 0.75,
            path: '/',
          }),
      ]);
    } catch (e) {
      throw new InternalServerErrorException({
        statusCode: 500,
        message: 'http.serverError.internalServerError',
      });
    }
  }

  @Get('/memory-heap')
  async checkMemoryHeap() {
    try {
      return this.health.check([
        () =>
          this.memoryHealthIndicator.checkHeap(
            'memory heap',
            300 * 1024 * 1024,
          ),
      ]);
    } catch (e) {
      throw new InternalServerErrorException({
        statusCode: 500,
        message: 'http.serverError.internalServerError',
      });
    }
  }

  @Get('/memory-rss')
  async checkMemoryRss() {
    try {
      return this.health.check([
        () =>
          this.memoryHealthIndicator.checkRSS('memory RSS', 300 * 1024 * 1024),
      ]);
    } catch (e) {
      throw new InternalServerErrorException({
        statusCode: 500,
        message: 'http.serverError.internalServerError',
      });
    }
  }
}
