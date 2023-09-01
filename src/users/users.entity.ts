import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Job } from 'src/jobs/job.entity'
import { Review } from 'src/reviews/review.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  /**
  0: guest
  1: root
  2: admin
  **/
  @Column()
  role: number

  @Column({ type: 'bigint', width: 14 })
  created: number

  @OneToMany(() => Job, (job) => job.user)
  jobs: Job[]

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[]
}
