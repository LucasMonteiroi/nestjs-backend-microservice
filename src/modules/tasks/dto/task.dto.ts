import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({ example: 'Task 1', description: 'Task description' })
  description: string;

  @ApiProperty({ example: true, description: 'Task done' })
  done?: boolean;
}
