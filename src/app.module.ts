import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JobsModule } from './jobs/jobs.module'
import { Job } from './jobs/job.entity'
import { ReviewsModule } from './reviews/reviews.module'
import { Review } from './reviews/review.entity'
import { UsersModule } from './users/users.module'
import { User } from './users/users.entity'
import { AuthModule } from './auth/auth.module'

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'review',
      entities: [Job, Review, User],
      synchronize: true, // remove in production
    }),
    JobsModule,
    ReviewsModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule { }
