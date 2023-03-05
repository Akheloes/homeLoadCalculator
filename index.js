import express from 'express'
import mustacheExpress from 'mustache-express'
import config from './config.js'
import logToSyslog from './utils/logger.js'
const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', './src/views')

import paymentController from './src/controllers/paymentController.js'

app.use('/', paymentController)

app.listen(config.server.port, () => {
  logToSyslog('info', `server running on port ${config.server.port}`)
})

export default app
