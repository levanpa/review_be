import { Controller, Get, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { authDto } from '../dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() data: authDto) {
    return this.authService.register(data)
  }

  @Post('login')
  login(@Body() data: { email: string; password: string }) {
    return this.authService.login(data)
  }
}
