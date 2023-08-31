import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './users.entity'
import { userDto } from 'src/dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async create(user) {
    return await this.usersRepo.save(user)
  }

  async login(email: string, password: string) {
    return await this.usersRepo.findOneBy({
      email,
      password,
    })
  }

  async findAll() {
    return await this.usersRepo.find()
  }

  async findById(id: number) {
    return await this.usersRepo.findOneBy({ id })
  }

  async findOne(where = null, relations = null, select = null) {
    return await this.usersRepo.findOne({
      where,
      relations,
      select,
    })
  }

  update(id: number, user: userDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
