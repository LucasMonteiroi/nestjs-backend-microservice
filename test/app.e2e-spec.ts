import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Logger } from '@nestjs/common';

import { HttpModule } from '@nestjs/axios';
import { AppModule } from './../src/app.module';
import { WinstonConfigService } from '@config';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    jest.setTimeout(10000);
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, HttpModule],
    })
      .overrideProvider(Logger)
      .useClass(WinstonConfigService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be defined', async () => {
    expect(app).toBeDefined();
  });
});
