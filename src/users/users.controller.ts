import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { UsersService } from './users.service'
import { userDto } from '../dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() user: userDto) {
    return this.usersService.create(user)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findById(id)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() user: userDto) {
    return this.usersService.update(id, user)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id)
  }
}
