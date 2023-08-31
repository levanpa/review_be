import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Job } from '../jobs/job.entity'
import { User } from '../users/users.entity'

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number

  @Column() // redundant?
  job_id: string

  @Column() // redundant?
  user_id: string

  @Column({ type: 'mediumtext' })
  content: string

  @Column()
  like: number

  @Column()
  dislike: number

  @Column({ type: 'bigint', width: 14 })
  created: number

  @ManyToOne(() => Job, job => job.reviews)
  job: Job

  @ManyToOne(() => User, user => user.reviews)
  user: User

}