import createConnection from '../utils/postgres'
import camelize from 'camelize'

const insertUser = async ({ name, email, passwordHash }) => {
  let client
  try {
    client = await createConnection()
    await client.query('INSERT INTO users(name, email, password) VALUES ($1, $2, $3)', [name, email, passwordHash])
  } finally {
    if (client) await client.end()
  }
}

const findUsers = async ({ email, password }) => {
  let client
  try {
    client = await createConnection()
    const response = await client.query('SELECT * FROM users')
    return response.rowCount ? camelize(response.rows) : []
  } finally {
    if (client) await client.end()
  }
}

const findUserByEmail = async ({ email }) => {
  let client
  try {
    client = await createConnection()
    const response = await client.query('SELECT * FROM users WHERE email = $1', [email])
    return response.rowCount ? camelize(response.rows) : null
  } finally {
    if (client) await client.end()
  }
}

export {
  insertUser,
  findUsers,
  findUserByEmail
}
