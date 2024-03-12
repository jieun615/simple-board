import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Ip() ip: string
  ): string {
    return this.appService.getHello();
  }

  @Get('name/:name')
  getName(@Param('name') name: string): string {
    return `${name} hello`;
  }
}
