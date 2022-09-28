import pool from '../utils/postgres'
import camelize from 'camelize'

const insertUser = async ({ name, email, passwordHash }) => {
  await pool.query('INSERT INTO users(name, email, password) VALUES ($1, $2, $3)', [name, email, passwordHash])
}

const findUsers = async ({ email, password }) => {
  const response = await pool.query('SELECT * FROM users')
  return response.rowCount ? camelize(response.rows) : []
}

const findUserByEmail = async ({ email }) => {
  const response = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  return response.rowCount ? camelize(response.rows) : null
}

export {
  insertUser,
  findUsers,
  findUserByEmail
}
