import express from 'express'
import alunoRoute from './alunoRoute'

const app = express()

app.use(
  '/v1',
  [
    alunoRoute
  ]
)

export default app
