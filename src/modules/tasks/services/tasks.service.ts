import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Task from '../entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async create(task: Task): Promise<Task> {
    const newTask = await this.taskRepository.create(task);
    await this.taskRepository.save(newTask);
    return newTask;
  }

  async find(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findById(id: string): Promise<Task> {
    return await this.taskRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(task: Partial<Task>): Promise<boolean> {
    const updated = await this.taskRepository.update(
      {
        id: task.id,
      },
      task,
    );

    if (updated.affected) return true;
    else return false;
  }

  async delete(id: string): Promise<boolean> {
    const foundTask = await this.findById(id);
    const deleted = await this.taskRepository.delete(foundTask);

    if (deleted.affected) return true;
    else return false;
  }
}
