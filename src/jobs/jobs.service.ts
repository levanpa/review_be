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
  ) {}

  async create(job: any) {
    let newJob = new Job()
    newJob.name = job.name
    newJob.img = job.img
    newJob.category = job.category
    newJob.review_counter = job.review_counter
    newJob.is_public = job.is_public
    newJob.created = Date.now()

    return await this.jobRepo.save(newJob)
  }

  async findAll(): Promise<Job[]> {
    return await this.jobRepo.find()
  }

  async findOne(id: number): Promise<Job> {
    return await this.jobRepo.findOneBy({ id })
  }

  update(id: number, data: jobDto) {
    return `This action updates a #${id} job`
  }

  remove(id: number) {
    return `This action removes a #${id} job`
  }
}
