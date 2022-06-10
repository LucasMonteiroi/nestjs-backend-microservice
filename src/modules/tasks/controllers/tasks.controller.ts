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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskDto } from '../dto/task.dto';
import Task from '../entities/task.entity';
import { TasksService } from '../services/tasks.service';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({
    status: 200,
    description: 'The created task',
    type: Task,
  })
  @ApiBody({ type: TaskDto })
  public async createTask(@Body() task: TaskDto) {
    return await this.taskService.create({
      description: task.description,
      done: task.done,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task by Id' })
  @ApiResponse({
    status: 200,
    description: 'The found task',
    type: Task,
  })
  public async getTaskbyId(@Param('id', ParseUUIDPipe) id: string) {
    return await this.taskService.findById(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({
    status: 200,
    description: 'All tasks',
    type: Task,
    isArray: true,
  })
  public async getTask() {
    return await this.taskService.find();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update task' })
  @ApiResponse({
    status: 200,
    description: 'Result of update',
    type: Boolean,
  })
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
  @ApiOperation({ summary: 'Delete task' })
  @ApiResponse({
    status: 200,
    description: 'Result of delete',
    type: Boolean,
  })
  public async deleteTask(@Param('id', ParseUUIDPipe) id: string) {
    return await this.taskService.delete(id);
  }
}
