const amqp = require('amqplib/callback_api');
const fibonacciCalc = require("../math-logic/fibonacci-series");

const sendValueToQueue2 = (number) => {
    amqp.connect('amqp://localhost', function (err, connection) {
        console.log('queue2', number);
        if (err) {
            console.log(err)
            process.exit()
        }
        connection.createChannel(function (err, channel) {
            if (err) {
                console.log(err)
                process.exit()
            }
            const queueName = 'queue2';
            const message = fibonacciCalc(number)
            console.log('message2 ', message)
        

            channel.assertQueue(queueName, {
                durable: false
            });

            channel.sendToQueue(queueName, Buffer.from(message.toString()));
            console.log(" [x] Sent from 2st queue %s", message);
        });
    });
}


module.exports = sendValueToQueue2