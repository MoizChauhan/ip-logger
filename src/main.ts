// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable trust proxy to get the correct IP address if behind a proxy
  app.use((req, res, next) => {
    req.headers['x-forwarded-for'] = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    next();
  });

  await app.listen(3000);
}
bootstrap();
