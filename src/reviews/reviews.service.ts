import { Injectable, Query } from '@nestjs/common'
import { reviewDto, dbQueryDto, jobDto, userDto } from '../dto'
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

  async create(review: reviewDto, userId?: number, jobId?: number) {
    // let newReview = this.initReview(review)
    let user = await this.userRepo.findOneBy({ id: userId })
    let job = await this.jobRepo.findOneBy({ id: jobId })
    // newReview.user = user || null
    let newReview = this.reviewRepo.create({
      user,
      job,
      ...review,
      created: Date.now(),
    })
    // newReview.created = Date.now()
    console.log(newReview)

    return await this.reviewRepo.save(review)
  }

  async createAll(review: reviewDto, user?: User, job?: Job) {
    let newReview = this.initReview(review)

    // newReview.user =
    // newReview.job =
    console.log(review)

    // return await this.reviewRepo.save(review)
  }

  initReview(review: reviewDto) {
    let newReview = this.reviewRepo.create(review)
    // newReview.content = review.content
    // newReview.location = review.location
    // newReview.like = review.like
    // newReview.dislike = review.dislike
    // newReview.experience = review.experience
    newReview.created = Date.now()
    return newReview
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
