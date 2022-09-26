import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import logger from './utils/logger'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  logger.info(`Application Running on Port ${PORT}`)
  logger.info(`Server Started ${new Date()}`)
})
