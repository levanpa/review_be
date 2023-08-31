import { Injectable } from '@nestjs/common'
import { reviewDto, dbQueryDto } from '../dto'
import { Review } from './review.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateResult, DeleteResult } from 'typeorm'

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
  ) { }

  async create(review: reviewDto) {
    return await this.reviewRepo.save(review)
  }

  async findAll() {
    return await this.reviewRepo.find()
  }

  async findOne(id: number) {
    return await this.reviewRepo.findOneBy({ id })
  }

  // doc: https://typeorm.io/find-options
  async filter(options: dbQueryDto) {
    return await this.reviewRepo.find({
      select: options.select ?? {},
      where: options.where ?? {},
      order: options.order ?? {},
    })
  }

  update(id: number, review: reviewDto) {
    return `This action updates a #${id} review`
  }

  remove(id: number) {
    return `This action removes a #${id} review`
  }
}
