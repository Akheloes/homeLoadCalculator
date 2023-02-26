import { Router } from 'express'
const router = Router()
import Payment from '../models/paymentModel.js'

router.get('/monthlypayment', (req, res) => {
  const payment = new Payment()
  const monthlyPayment = payment.getMonthlyPayment(5000, 5, 12)
  res.render('monthlypayment', { monthlyPayment })
})

export default router
