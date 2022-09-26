import pino from 'pino'

const transport = pino.transport({
  target: 'pino-pretty',
  options: {
    ignore: 'pid, hostname',
    suppressFlushSyncWarning: false
  }
})

export default pino(transport)
