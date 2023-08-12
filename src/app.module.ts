import { Module } from '@nestjs/common';
import { TodoModules } from './app/todos/todo.module';

@Module({
  // モジュールが依存している依存関係をインポートする
  imports: [TodoModules],
  // Controllerとして使用しているものを定義する
  controllers: [],
  // DIできるようになる
  providers: [],
})
export class AppModule {}
