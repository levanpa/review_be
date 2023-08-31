import { Injectable } from '@nestjs/common'
import { User } from 'src/users/users.entity'
import { UsersService } from 'src/users/users.service'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(data: any) {
    let user = new User()
    user.name = data.name
    user.email = data.email
    user.password = this.encodePassword(data.password)
    user.created = Date.now()
    return await this.usersService.create(user)
  }

  async login(data: { email: string; password: string }) {
    let user = await this.usersService.findOne({ email: data.email })
    if (user?.id && this.comparePassword(data.password, user.password)) {
      return 'login ok '
    }
    return 'login failed'
  }

  encodePassword(password: string) {
    return bcrypt.hashSync(password, 5)
  }

  comparePassword(password: string, userPassword: string) {
    return bcrypt.compareSync(password, userPassword)
  }
}
