import request from 'supertest'
import app from '../index.js'
import Payment from '../src/models/paymentModel'

describe('GET /monthlypayment', () => {
  it('should return the monthly payment', async () => {
    const principal = 100000
    const rate = 0.05
    const term = 12
    const payment = new Payment(principal, rate, term)
    const expectedMonthlyPayment = payment.getMonthlyPayment()

    const res = await request(app)
      .get('/monthlypayment')
      .query({ principal, rate, term })

    expect(res.status).toBe(200)
    expect(res.text).toContain(expectedMonthlyPayment)
  })
})
