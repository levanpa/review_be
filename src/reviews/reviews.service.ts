import { Injectable, Query } from '@nestjs/common'
import { reviewDto, dbQueryDto, jobDto } from '../dto'
import { Review } from './review.entity'
import { Job } from '../jobs/job.entity'
import { User } from '../users/users.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UpdateResult, DeleteResult } from 'typeorm'

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
    @InjectRepository(Job)
    private readonly jobRepo: Repository<Job>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(review: reviewDto, job?: Job) {
    let newReview = new Review()
    newReview.content = review.content
    newReview.location = review.location
    newReview.like = review.like
    newReview.dislike = review.dislike
    newReview.experience = review.experience
    newReview.created = Date.now()
    newReview.job = job || null
    // newReview.user =

    return await this.reviewRepo.save(review)
  }

  async findAll(query?: dbQueryDto) {
    // return await this.reviewRepo.find({
    //   relations: { user: true, job: true },
    // })
    // if (!query) return await this.reviewRepo.find()

    let queryData = {
      select: query.select ?? {},
      where: query.where ?? {},
      order: query.order ?? {},
    }

    return await this.reviewRepo.find(queryData)
  }

  async findOne(id: number) {
    return await this.reviewRepo.findOneBy({ id })
  }

  update(id: number, review: reviewDto) {
    return `This action updates a #${id} review`
  }

  remove(id: number) {
    return `This action removes a #${id} review`
  }
}
