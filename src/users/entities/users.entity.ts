import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/entities/roles.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @ApiProperty({ example: '1' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false, unique: true })
  login: string;

  @ApiProperty()
  @Column({ nullable: true })
  password: string;

  @ApiProperty()
  @Column({ nullable: true })
  email: string;

  @ApiProperty()
  @Column({ nullable: false, default: false })
  banned: boolean;

  @ApiProperty()
  @Column({ nullable: true })
  bunReason: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
