// import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'
// import isAuthenticated from './middlewares/isAuthenticated'

// dotenv.config()
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
// app.use(isAuthenticated)
app.use(routes)

export default app
