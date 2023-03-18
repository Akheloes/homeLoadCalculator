import { appendFile } from 'fs/promises'

class Payment {
  
  constructor(principal, yearlyIinterestRate, termInMonths) {
    this.principal = principal
    this.yearlyIinterestRate = yearlyIinterestRate / 100
    this.termInMonths = termInMonths * 12
  }

  getMonthlyInterestRate() {

    return Math.pow(1 + this.yearlyIinterestRate, 1 / 12) - 1
  }

  getMonthlyPayment() {
    const monthlyPayment =
      (this.principal * this.getMonthlyInterestRate() * Math.pow(1 + this.getMonthlyInterestRate(), this.termInMonths)) /
      (Math.pow(1 + this.getMonthlyInterestRate(), this.termInMonths) - 1)

    try {
      this.save(this.principal, this.yearlyIinterestRate, this.termInMonths)
    } catch(persistenceError) {
      console.error(`[ERROR] ${persistenceError}`)
    }

    return monthlyPayment.toFixed(2)
  }

  save(principal, yearlyIinterestRate, termInMonths) {
    const data = `${principal}, ${yearlyIinterestRate}, ${termInMonths}\n`

    appendFile('persistence.csv', data)
  }
}
  
export default Payment
