const express = require("express");
const cluster = require("cluster");
const totalCPUs = require('os').cpus().length;

const fibonacciCalc = require("./math-logic/fibonacci-series");
if (cluster.isMaster) {
    console.log(`Total Number of CPU Counts is ${totalCPUs}`);

    const worker1 = require('child_process').fork("./workers/worker1")
    const worker2 = require('child_process').fork("./workers/worker2")

    console.log('Child Process ID is: ', worker1.pid);
    console.log('Child Process ID is: ', worker2.pid);
    worker1.on('message', (number) => {
        console.log('Worker 1 message result: ', number)
    })
    worker2.on('message', (number) => {
        console.log('Worker 2 message result: ', number)
    })

    

    cluster.on("online", worker => {
       console.log(`Message received from - ${worker.process.pid}`);
       worker.on('message', (number) => {
           if(number % 2 === 0) {
               worker1.send(number)
           } else {
               worker2.send(number)
           }
       })
    });
    cluster.on("exit", worker => {
        console.log(`Worker Id ${worker.id} and PID is ${worker.process.pid} is offline`);
        console.log("Let's fork new worker!");
        cluster.fork();
    });

    for( let i = 0; i < totalCPUs - 2; i++ ) {
        let worker = cluster.fork()
        console.log(`Worker started on PID -  ${worker.process.pid}`);
    }
}
else {
    const app = express();
    app.get("/", (request, response) => {
        process.send(request.query.number)
        response.end('WE GOT')

    });

    app.listen(3000, () => console.log("Express App is running on PORT : 3000"));
}