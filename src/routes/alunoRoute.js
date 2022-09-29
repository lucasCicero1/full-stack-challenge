import express from 'express'
import { createAluno, retrieveAlunos, editAluno, deleteAluno } from '../controllers/alunoController'
import isAuthenticated from '../middlewares/isAuthenticated'

const app = express()

// Cadastrar novo aluno
app.post('/create', isAuthenticated, createAluno)

// Listar alunos cadastrados
app.get('/retrieve', isAuthenticated, retrieveAlunos)

// Editar cadastro de aluno
app.patch('/edit', isAuthenticated, editAluno)

// Excluir cadastro de aluno
app.delete('/delete', isAuthenticated, deleteAluno)

export default app
