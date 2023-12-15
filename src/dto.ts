export type reviewDto = {
  id: number
  content: string
  location: string
  like: number
  dislike: number
  experience?: number
  created?: number
  [key: string]: any
}
export type jobDto = {
  id: number
  name: string
  img: string
  category: string
  review_counter: number
  created?: number
  is_public?: boolean
}
export type categoryDto = {
  id: number
  name: string
  job_counter: number
  created?: number
}
export type dbQueryDto = {
  select?: {}
  where?: {}
  order?: {}
}
export type queryRequestDto = {
  type: string
  options?: dbQueryDto
  data?: reviewDto
}
export type userDto = {
  id: number
  name: string
  email: string
  password?: string
  role: number
  review_counter: number
  vote_counter: number
  created?: number
}
export type authDto = {}
