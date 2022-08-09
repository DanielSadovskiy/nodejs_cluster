const amqp = require('amqplib/callback_api');
const fibonacciCalc = require("../math-logic/fibonacci-series");

const sendValueToQueue1 = (number) => {
    amqp.connect('amqp://localhost', (err, connection) => {
        console.log('queue1', number);
        if (err) {
            console.log(err)
            process.exit()
        }
        connection.createChannel((err, channel) => {
            if (err) {
                console.log(err)
                process.exit()
            }
            const queueName = 'queue1';
            const message = fibonacciCalc(number)
            console.log('message1 ', message)
        

            channel.assertQueue(queueName, {
                durable: false
            });

            channel.sendToQueue(queueName, Buffer.from(message.toString()));
            console.log(" [x] Sent from 1st queue %s", message);
        });
    });
}


module.exports = sendValueToQueue1