import { Module } from '@nestjs/common';
import { TodoModule } from './app/todos/todo.module';
import { DatabaseModule } from './app/database/database.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  // モジュールが依存している依存関係をインポートする
  imports: [TodoModule, DatabaseModule, ConfigModule.forRoot()],
  // Controllerとして使用しているものを定義する
  controllers: [],
  // DIできるようになる
  providers: [],
})
export class AppModule {}
