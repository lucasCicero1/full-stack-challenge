import { Router } from 'express'
import { createAluno, retrieveAlunos, editAluno, deleteAluno, retrieveAluno } from '../controllers/alunoController'
import isAuthenticated from '../middlewares/isAuthenticated'

const router = Router()

router.post('/create', isAuthenticated, (req, res) => {
  return createAluno(req, res)
})

router.get('/retrieve', isAuthenticated, (req, res) => {
  return retrieveAlunos(req, res)
})

router.patch('/edit', isAuthenticated, (req, res) => {
  return editAluno(req, res)
})

router.delete('/delete', isAuthenticated, (req, res) => {
  return deleteAluno(req, res)
})

router.get('/get', isAuthenticated, (req, res) => {
  return retrieveAluno(req, res)
})

export default router
