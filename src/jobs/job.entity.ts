import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm'
import { Review } from '../reviews/review.entity'
import { User } from '../users/users.entity'

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  img: string

  @Column()
  review_counter: number

  @Column()
  category: number

  @Column()
  is_public: boolean

  @Column({ type: 'bigint', width: 14 })
  created: number

  @OneToMany(() => Review, (review) => review.job)
  reviews: Review[]

  @ManyToOne(() => User, (user) => user.jobs)
  user: User
}
