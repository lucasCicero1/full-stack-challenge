import express from 'express'
import { login, register } from '../controllers/authController'

const app = express()

app.post('/auth/register', register)

app.post('/auth/login', login)

export default app
