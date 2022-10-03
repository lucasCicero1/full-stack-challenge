import { Router } from 'express'
import alunoRoute from './alunoRoute'
import authRoute from './authRoute'

const router = Router()

router.use(
  '/v1',
  [
    alunoRoute,
    authRoute
  ]
)

export { router }
