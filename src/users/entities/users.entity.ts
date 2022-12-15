import { ApiProperty } from '@nestjs/swagger';
import { Contact } from 'src/contacts/entities/contacts.entity';
import { Role } from 'src/roles/entities/roles.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
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
  banReason: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}
