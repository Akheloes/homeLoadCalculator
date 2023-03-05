import Payment from '../models/paymentModel.js'

import { Router } from 'express'
const router = Router()

router.get('/monthlypayment', (req, res) => {
  const { principal, rate, term } = req.query
  const payment = new Payment(principal, rate, term)
  const monthlyPayment = payment.getMonthlyPayment()
  res.render('monthlyPayment', { monthlyPayment })
})

export default router
