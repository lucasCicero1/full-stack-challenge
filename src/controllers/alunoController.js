import { insertAluno, selectAllAlunos, updateAluno, removeAluno } from '../services/alunoService'

const createAluno = async (req, res) => {
  try {
    const { name, email, ra, cpf } = req.body
    await insertAluno({ name, email, ra, cpf })
    res.status(201).send('Aluno has been created.')
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

const retrieveAlunos = async (req, res) => {
  try {
    const response = await selectAllAlunos()
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

const editAluno = async (req, res) => {
  try {
    const { name, email } = req.body
    await updateAluno({ name, email })
    res.status(200).send('Aluno has been edited.')
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

const deleteAluno = async (req, res) => {
  try {
    const { ra } = req.query
    await removeAluno({ ra })
    res.status(200).send(`Aluno with RA: ${ra} has been deleted.`)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

export default {
  createAluno,
  retrieveAlunos,
  editAluno,
  deleteAluno
}
