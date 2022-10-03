import { insertAluno, selectAllAlunos, updateAluno, removeAluno, findAlunoByCpf } from '../services/alunoService'

const createAluno = async (req, res) => {
  try {
    const { name, email, ra, cpf } = req.body
    await insertAluno({ name, email, ra, cpf })
    res.status(201).send({ message: 'Aluno has been created.' })
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

const retrieveAluno = async (req, res) => {
  try {
    const { cpf } = req.query
    const response = await findAlunoByCpf({ cpf })
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

const editAluno = async (req, res) => {
  try {
    const { name, email, ra } = req.body
    await updateAluno({ name, email, ra })
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

export {
  createAluno,
  retrieveAlunos,
  editAluno,
  deleteAluno,
  retrieveAluno
}
