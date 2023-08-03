import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
// ブートストラップするとは、Nest.jsアプリケーションの初期化や起動を意味する
bootstrap();
