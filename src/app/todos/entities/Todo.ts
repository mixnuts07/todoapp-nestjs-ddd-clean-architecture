import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// データベースのテーブルにマッピングされるオブジェクト
// @Entity()をドメインモデルに付けるとエンティティになる
@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column({ nullable: true })
  description?: string;
}
