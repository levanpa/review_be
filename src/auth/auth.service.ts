import { HttpStatus, Injectable } from '@nestjs/common'
import { User } from 'src/users/users.entity'
import { UsersService } from 'src/users/users.service'
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt'
import { userDto } from 'src/dto'
import type {
  Request as expressRequest,
  Response as expressResponse,
} from 'express'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwt: JwtService,
  ) {}

  async register(data: userDto) {
    let user = new User()
    user.name = data.name
    user.email = data.email
    user.role = data.role ?? 0
    user.password = this.encodePassword(data.password)
    user.created = Date.now()
    return await this.usersService.create(user)
  }

  async login(
    data: { email: string; password: string },
    req: expressRequest,
    res: expressResponse,
  ) {
    let user = await this.usersService.findOne({ email: data.email })
    if (user?.id && this.comparePassword(data.password, user.password)) {
      let token = await this.generateToken(user)
      user.password = ''

      res.send({
        statusCode: HttpStatus.OK,
        message: 'Login successfully',
        user,
        token,
      })
    } else {
      res.send({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      })
    }
  }

  encodePassword(password: string) {
    return bcrypt.hashSync(password, 5)
  }

  comparePassword(password: string, userPassword: string) {
    return bcrypt.compareSync(password, userPassword)
  }

  async generateToken(user: userDto) {
    return await this.jwt.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role,
    })
  }
}
