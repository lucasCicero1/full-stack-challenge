import express from 'express'
import alunoRoute from './alunoRoute'
import authRoute from './authRoute'

const app = express()

app.use(
  '/v1',
  [
    alunoRoute,
    authRoute
  ]
)

export default app
