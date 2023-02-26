class Payment {
    getMonthlyPayment(principal, interestRate, termInMonths) {
      const monthlyInterestRate = interestRate / 1200
      const monthlyPayment =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, termInMonths)) /
        (Math.pow(1 + monthlyInterestRate, termInMonths) - 1)
      return monthlyPayment.toFixed(2)
    }
  }
  
  export default Payment
  