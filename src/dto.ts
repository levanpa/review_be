export type reviewDto = {
  id: number,
  content: string,
  like: number,
  dislike: number,
  job_id: string,
  created?: number,
}
export type jobDto = {
  id: string,
  name: string,
  img: string,
  review_counter: number,
  location: string,
  category: string,
  created?: number,
}
export type categoryDto = {
  id: number,
  name: string,
  job_counter: number,
  created?: number,
}
export type dbQueryDto = {
  select: {}
  where: {}
  order: {}
}
export type queryRequestDto = {
  type: string,
  options?: dbQueryDto,
  data?: reviewDto
}
export type userDto = {
  id: string,
  name: string,
  email: string,
  password: string,
  created?: number,
}
export type authDto = {

}