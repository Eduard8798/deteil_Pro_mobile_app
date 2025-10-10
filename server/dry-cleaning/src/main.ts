import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "node:process";

async function bootstrap() {
  const PORT = process.env.PORT || 5011;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log('server start on port =',PORT));
}
bootstrap();
