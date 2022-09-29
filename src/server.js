import app from './app'
import logger from './utils/logger'

const PORT = 3000

app.listen(PORT, () => {
  logger.info(`Application Running on Port ${PORT}`)
  logger.info(`Server Started ${new Date()}`)
})
