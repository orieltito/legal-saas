import { Controller, Get } from '@nestjs/common';

@Controller()
export class MainController {
  @Get()
  home() {
    return { status: 'API ONLINE 🚀' };
  }
}