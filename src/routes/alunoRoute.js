import express from 'express'
import { createAluno, retrieveAlunos, editAluno, deleteAluno } from '../controllers/alunoController'
import { isAuthenticated } from '../middlewares/isAuthenticated'

const app = express()

// Cadastrar novo aluno
app.post('/create', createAluno)

// Listar alunos cadastrados
app.get('/retrieve', isAuthenticated, retrieveAlunos)

// Editar cadastro de aluno
app.patch('/edit', editAluno)

// Excluir cadastro de aluno
app.delete('/delete', deleteAluno)

export default app
