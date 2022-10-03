import { Client } from 'pg'
import configs from '../configs'
const { POSTGRES: { development } } = configs

const createConnection = async () => {
  const client = new Client({
    user: development.POSTGRES_USER,
    password: development.POSTGRES_PASSWORD,
    database: development.POSTGRES_DB,
    port: development.PORT
  })
  await client.connect()
  return client
}

export default createConnection
