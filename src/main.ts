import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get(ConfigService);
  const port = config.get<number>('API_PORT') || 3000;

  await app.listen(port, () => console.log(`Server started on ${port} port`));
}

bootstrap();
