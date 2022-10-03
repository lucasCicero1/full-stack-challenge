import dotenv from 'dotenv'

dotenv.config()

export default {
  POSTGRES: {
    development: {
      POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
      POSTGRES_USER: process.env.POSTGRES_USER,
      POSTGRES_DB: process.env.POSTGRES_DB,
      PORT: process.env.POSTGRES_PORT
    },
    test: {
      POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD_TEST,
      POSTGRES_USER: process.env.POSTGRES_USER_TEST,
      POSTGRES_DB: process.env.POSTGRES_DB_TEST,
      PORT: process.env.POSTGRES_PORT_TEST
    }
  },
  TOKEN: process.env.TOKEN
}
