import createConnection from '../utils/postgres'
import camelize from 'camelize'

const insertAluno = async ({ name, email, ra, cpf }) => {
  let client
  try {
    client = await createConnection()
    await client.query('INSERT INTO alunos(ra, name, email, cpf) VALUES ($1, $2, $3, $4)', [ra, name, email, cpf])
  } finally {
    if (client) await client.end()
  }
}

const selectAllAlunos = async () => {
  let client
  try {
    client = await createConnection()
    const response = await client.query('SELECT * FROM public.alunos')
    return response.rowCount ? camelize(response.rows) : []
  } finally {
    if (client) await client.end()
  }
}

const findAlunoByCpf = async ({ cpf }) => {
  let client
  try {
    client = await createConnection()
    const response = await client.query('SELECT * FROM public.alunos WHERE cpf = $1', [cpf])
    return response.rowCount ? camelize(response.rows) : null
  } finally {
    if (client) await client.end()
  }
}

const updateAluno = async ({ name, email, ra }) => {
  let client
  try {
    client = await createConnection()
    await client.query('UPDATE public.alunos SET name = $1, email = $2 WHERE ra = $3', [name, email, ra])
  } finally {
    if (client) await client.end()
  }
}

const removeAluno = async ({ ra }) => {
  let client
  try {
    client = await createConnection()
    await client.query('DELETE FROM public.alunos WHERE ra = $1', [ra])
  } finally {
    if (client) await client.end()
  }
}

export {
  insertAluno,
  selectAllAlunos,
  updateAluno,
  removeAluno,
  findAlunoByCpf
}
