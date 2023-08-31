import { Module, forwardRef } from '@nestjs/common'
import { AuthService } from 'src/auth/auth.service'
import { UsersModule } from 'src/users/users.module'
import { UsersService } from 'src/users/users.service'
import { AuthController } from 'src/auth/auth.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/users/users.entity'

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
