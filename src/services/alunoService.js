import pool from '../utils/postgres'
import camelize from 'camelize'

const insertAluno = async ({ name, email, ra, cpf }) => {
  await pool.query('INSERT INTO alunos(ra, name, email, cpf) VALUES ($1, $2, $3, $4)', [ra, name, email, cpf])
}

const selectAllAlunos = async () => {
  const response = await pool.query('SELECT * FROM public.alunos')
  return response.rowCount ? camelize(response.rows) : []
}

const updateAluno = async ({ name, email, ra }) => {
  await pool.query('UPDATE public.alunos SET name = $1, email = $2 WHERE ra = $3', [name, email, ra])
}

const removeAluno = async ({ ra }) => {
  await pool.query('DELETE FROM public.alunos WHERE ra = $1', [ra])
}

export {
  insertAluno,
  selectAllAlunos,
  updateAluno,
  removeAluno
}
