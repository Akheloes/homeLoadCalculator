import express from 'express'
import mustacheExpress from 'mustache-express'
const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', './views')

import paymentController from './controllers/paymentController.js'

app.use('/', paymentController)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
