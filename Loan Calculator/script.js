function calculateLone() {
    loanAmoutValue = document.getElementById("loan-amount").value

    interestRateValue = document.getElementById("Interest-rate").value

    monthsTopayValue = document.getElementById("Months-to-pay").value


    Interest = (  loanAmoutValue  * (interestRateValue  * 0.01)) /   monthsTopayValue

    monthlypayment = (loanAmoutValue / monthsTopayValue + Interest).toFixed(2)


    document.getElementById("payment").innerHTML = `Monthly payment: ${monthlypayment}`


}