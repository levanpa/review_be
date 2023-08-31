import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ReviewsService } from './reviews.service'
import { reviewDto, queryRequestDto } from '../dto'

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) { }

  @Post()
  create(@Body() request: queryRequestDto) {
    if (request?.type === 'query') {
      return this.reviewsService.filter(request.options)
    } else {
      return this.reviewsService.create(request.data)
    }
  }

  @Get()
  findAll() {
    return this.reviewsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reviewsService.findOne(id)
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
