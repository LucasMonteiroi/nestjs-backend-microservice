import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Task {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  description: string;

  @Column({ nullable: true, default: false })
  done: boolean;

  @Column()
  @CreateDateColumn()
  createdAt?: Date;
}

export default Task;
