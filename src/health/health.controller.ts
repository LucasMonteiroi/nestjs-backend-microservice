import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private typeOrmIndicator: TypeOrmHealthIndicator,
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
}
