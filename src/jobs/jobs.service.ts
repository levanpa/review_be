import { Injectable } from '@nestjs/common'
import { jobDto } from '../dto'
import { Job } from './job.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateResult, DeleteResult } from 'typeorm'


@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepo: Repository<Job>,
  ) { }

  create(job: jobDto) {
    return 'This action adds a new job'
  }

  async findAll(): Promise<Job[]> {
    return await this.jobRepo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} job`
  }

  update(id: number, data: jobDto) {
    return `This action updates a #${id} job`
  }

  remove(id: number) {
    return `This action removes a #${id} job`
  }
}
