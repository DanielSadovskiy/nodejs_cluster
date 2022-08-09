const redis = require("redis");
const keys = require("./keys");

const client = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
})
client.connect()    

async function redisMiddleware(req, res, next) {
    if (!client.isOpen) {
        await client.connect();
    }

    switch (req.url) {
        case "/posts":
            let cached;
            try {
                cached = await client.get('posts')
                console.log('cached', cached)
            } catch {
                res.status(500).send("<h4>Something went wrong!</h4>");
            }
            if(cached !== null ){
                res.send(cached);
                console.log("from redis!")
            } else {
                next()
            } 
    }
}

module.exports = redisMiddleware;