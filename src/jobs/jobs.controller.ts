import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { JobsService } from './jobs.service'
import { jobDto } from '../dto'

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post('/add')
  create(@Body() job: jobDto) {
    return this.jobsService.create(job)
  }

  @Get()
  findAll() {
    return this.jobsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jobsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() job: jobDto) {
    return this.jobsService.update(id, job)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.jobsService.remove(id)
  }
}
