import { Router } from 'express'
import { login, register } from '../controllers/authController'

const router = Router()

router.post('/auth/register', (req, res) => {
  return register(req, res)
})

router.post('/auth/login', (req, res) => {
  return login(req, res)
})

export default router
