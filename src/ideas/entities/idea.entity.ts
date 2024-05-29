import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Idea {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  title: string;
  @Column('text')
  description: string;
}
