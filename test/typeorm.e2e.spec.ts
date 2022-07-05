import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { TYPEORM } from '../src/environments';
import { TypeOrmModule } from '@nestjs/typeorm';
import Task from '../src/modules/tasks/entities/task.entity';
import { TasksModule } from '../src/modules/tasks/tasks.module';
import { Repository, getMetadataArgsStorage } from 'typeorm';

describe('Task', () => {
  let app: INestApplication;
  let repository: Repository<Task>;
  jest.setTimeout(20000);

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        TasksModule,
        TypeOrmModule.forRoot({
          ...TYPEORM,
          type: 'postgres',
          schema: 'public',
          synchronize: true,
          entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
          autoLoadEntities: true,
          logging: true,
        }),
      ],
    }).compile();

    app = module.createNestApplication();
    repository = module.get('TaskRepository');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('ensure typeORM Database', async () => {
    expect(TYPEORM).toHaveProperty('database', 'backend_microservice');
  });
});
