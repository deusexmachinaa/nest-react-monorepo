import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { TypedRoute } from '@nestia/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @TypedRoute.Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('goodbye')
  @TypedRoute.Get('goodbye')
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }

  @Get('jsondata')
  @TypedRoute.Get('jsondata')
  async getJsonData() {
    return this.appService.getJsonData();
  }
}
