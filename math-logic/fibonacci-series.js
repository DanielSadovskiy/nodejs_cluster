const fibonacciCalc = (number) => {
    if (number <= 1) return 1;
    return fibonacciCalc(number - 1) + fibonacciCalc(number - 2)
}

module.exports = fibonacciCalc