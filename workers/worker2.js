const amqp = require('amqplib/callback_api');

amqp.connect("amqp://localhost", (err, connection) => {
    if(err) process.exit()
    const queueName = "queue"
    connection.createChannel((err, channel) => {
        channel.assertQueue(queueName, {durable: false})
        channel.consume(queueName, msg => {
            console.log("Waiting for messages")
            console.log(`${queueName} - ${msg.content.toString()}`)

        }, {noAck: true})
    })
})