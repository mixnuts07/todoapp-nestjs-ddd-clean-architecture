import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// データベースのテーブルにマッピングされるオブジェクト
@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;
}
