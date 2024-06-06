// src/app.controller.ts
import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Logger } from '@nestjs/common';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Get('log_ip')
  @Post('log_ip')
  logIp(@Req() request: Request): string {
    const clientIp = request.ip;
    console.log(`Request from IP: ${clientIp}`)
    this.logger.log(`Request from IP: ${clientIp}`);
    return `Request received from IP: ${clientIp}`;
  }
}
