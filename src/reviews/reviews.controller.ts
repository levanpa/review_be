import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common'
import { ReviewsService } from './reviews.service'
import { reviewDto, dbQueryDto } from '../dto'
import { AuthGuard } from 'src/auth/auth.guard'
import type {
  Request as expressRequest,
  Response as expressResponse,
} from 'express'

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post('/add')
  @UseGuards(AuthGuard)
  create(@Req() req: expressRequest, @Body() data: any) {
    return this.reviewsService.create(data.reviewData, data.userId, data.jobId)
  }

  @Post('/add-all')
  @UseGuards(AuthGuard)
  createAll(@Req() req: expressRequest, @Body() data: any) {
    return this.reviewsService.createAll(data.reviewData, data.user, data.job)
  }

  @Get()
  findAll() {
    console.log('go to findAll')
    return this.reviewsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('go to findOne', id)
    return this.reviewsService.findOne(id)
  }

  @Post()
  findSome(@Body() query: any) {
    return this.reviewsService.findAll(query.data)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() review: reviewDto) {
    return this.reviewsService.update(id, review)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.reviewsService.remove(id)
  }
}
