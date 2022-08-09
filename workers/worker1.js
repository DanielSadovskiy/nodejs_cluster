const fibonacciCalc = require("../math-logic/fibonacci-series");

process.on('message', number => {
    const fabResult = fibonacciCalc(number);
    console.log(`Worker 1 ID is: ${process.pid}`)
    process.send(fabResult)
})