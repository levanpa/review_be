import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Request,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'
import { userDto } from 'src/dto'
import type {
  Request as expressRequest,
  Response as expressResponse,
} from 'express'

declare module 'express-session' {
  interface SessionData {
    ssid: string
    authenticated: boolean
  }
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() data: userDto) {
    return this.authService.register(data)
  }

  @Post('login')
  login(
    @Body() data: { email: string; password: string },
    @Req() req: expressRequest,
    @Res({ passthrough: true }) res: expressResponse,
  ) {
    return this.authService.login(data, req, res)
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
