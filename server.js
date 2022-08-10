const express = require("express");
// const jphRoutes = require("./jph-routes");

// const FabQueue1 = require("./queues/queue1");
// const FabQueue2 = require("./queues/queue2");

const app = express();
app.get("/", (request, response) => {
    // const number = request.query.number
    // if (number % 2 === 0) {
    //     FabQueue1(number)
    // } else {
    //     FabQueue2(number)
    // }
    response.end('WE GOT')

});

app.get("/world", (request, response) => {
    console.log('proccess', process.env.INSTANCE_NUM)
    response.send(JSON.stringify({"Hello":"World"}));
});

// app.use("/api", jphRoutes);

app.listen(3000, () => console.log("Express App is running on PORT : 3000"));