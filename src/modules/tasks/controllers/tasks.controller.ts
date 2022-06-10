import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskDto } from '../dto/task.dto';
import { TasksService } from '../services/tasks.service';

@Controller('/api/v1/tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post()
  public async createTask(@Body() task: TaskDto) {
    return await this.taskService.create({
      description: task.description,
      done: task.done,
    });
  }

  @Get(':id')
  public async getTaskbyId(@Param('id', ParseUUIDPipe) id: string) {
    return await this.taskService.findById(id);
  }

  @Get()
  public async getTask() {
    return await this.taskService.find();
  }

  @Patch(':id')
  public async updateTask(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: TaskDto,
  ) {
    return await this.taskService.update({
      id,
      description: dto.description,
      done: dto.done,
    });
  }

  @Delete(':id')
  public async deleteTask(@Param('id', ParseUUIDPipe) id: string) {
    return await this.taskService.delete(id);
  }
}
