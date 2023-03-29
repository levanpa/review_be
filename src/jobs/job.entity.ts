import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  job_id: string

  @Column()
  name: string

  @Column()
  img: string

  @Column()
  location: string

  @Column()
  review_counter: number

  @Column()
  category: number

  @Column({ type: 'bigint', width: 14 })
  created: number

}