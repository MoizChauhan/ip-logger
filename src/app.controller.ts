// src/app.controller.ts
import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Logger } from '@nestjs/common';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Get()
  @Post()
  logIp(@Req() request: Request): string {
    let clientIp: string;

    // Check if the app is behind a proxy and the headers are set correctly
    if (request.headers['x-forwarded-for']) {
      clientIp = (request.headers['x-forwarded-for'] as string).split(',')[0];
    } else {
      clientIp = request.connection.remoteAddress;
    }

    this.logger.log(`Request from IP: ${clientIp}`);
    return `Request received from IP: ${clientIp}`;
  }
}
