import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import Task from '../../../src/modules/tasks/entities/task.entity';
import { TasksService } from '../../../src/modules/tasks/services/tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  const mockTestRepository = () => ({
    create: jest.fn(),
    update: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useFactory: mockTestRepository,
        },
      ],
    }).compile();

    service = await module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('get all tasks', async () => {
    const expected = [new Task()];
    const results = await service.find();
    expect(results).toEqual(expected);
  });
});
