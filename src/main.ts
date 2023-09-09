import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as session from 'express-session'
import * as cookieParser from 'cookie-parser'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.use(
    session({
      secret: 'session-dev',
      resave: false,
      saveUninitialized: false,
    }),
    cookieParser(),
  )

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }

  await app.listen(3000)
}
bootstrap()
