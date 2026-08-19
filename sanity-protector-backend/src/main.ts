import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { AppLogger } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(AppLogger));

  const configService = app.get(ConfigService);
  const port = configService.get<string>('PORT') ?? 8000;
  const frontendUrl = configService.get<string>('FRONTEND_URL');

  app.use(helmet());
  app.enableCors({ origin: frontendUrl });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sanity Protector API')
    .setDescription('Sanity Protector backend API')
    .setVersion('0.1')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, swaggerDocument);

  await app.listen(port);
}
void bootstrap();
