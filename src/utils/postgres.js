import { Pool } from 'pg'
import configs from '../configs'
const { POSTGRES } = configs

const pool = new Pool({
  user: POSTGRES.POSTGRES_USER,
  password: POSTGRES.POSTGRES_PASSWORD,
  database: POSTGRES.POSTGRES_DB,
  port: POSTGRES.PORT
})

export default pool
