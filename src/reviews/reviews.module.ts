import { Module } from '@nestjs/common'
import { ReviewsService } from './reviews.service'
import { ReviewsController } from './reviews.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Review } from './review.entity'
import { JobsService } from '../jobs/jobs.service'
import { JobsModule } from '../jobs/jobs.module'
import { Job } from '../jobs/job.entity'
import { UsersService } from '../users/users.service'
import { UsersModule } from '../users/users.module'
import { User } from '../users/users.entity'

@Module({
  imports: [
    JobsModule,
    UsersModule,
    TypeOrmModule.forFeature([Review]),
    TypeOrmModule.forFeature([Job]),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService, JobsService, UsersService],
})
export class ReviewsModule {}
