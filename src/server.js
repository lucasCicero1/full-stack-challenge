import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import logger from './utils/logger'
import morgan from 'morgan'
import routes from './routes'
import isAuthenticated from './middlewares/isAuthenticated'

dotenv.config()
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(isAuthenticated)
app.use(routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  logger.info(`Application Running on Port ${PORT}`)
  logger.info(`Server Started ${new Date()}`)
})
