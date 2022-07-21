import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class TaskDto {
  @ApiProperty({ example: 'Task 1', description: 'Task description' })
  @IsOptional()
  description?: string;

  @ApiProperty({ example: true, description: 'Task done' })
  @IsOptional()
  done?: boolean;
}
