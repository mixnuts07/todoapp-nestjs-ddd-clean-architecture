import { Module } from '@nestjs/common';
import { TodoModule } from './app/todos/todo.module';
import { DatabaseModule } from './app/todos/database.module';

@Module({
  // モジュールが依存している依存関係をインポートする
  imports: [TodoModule, DatabaseModule],
  // Controllerとして使用しているものを定義する
  controllers: [],
  // DIできるようになる
  providers: [],
})
export class AppModule {}
