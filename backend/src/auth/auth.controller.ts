import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  register(@Body() body: any) {
    return this.auth.register(body.email, body.password);
  }

  @Post('login')
  login(@Body() body: any) {
    return this.auth.login(body.email, body.password);
  }

  @Post('create')
  create(@Body() body: any, @Req() req: any) {
    return this.auth.register(body.email, body.password);
  }
}