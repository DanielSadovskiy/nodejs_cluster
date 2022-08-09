const express = require("express");
const redis = require("redis");

const keys = require("./middlewares/keys");

const redisMiddleware = require("./middlewares/redis-middleware");

const GetPosts = require("./api/jph-posts-api");

const routes = express.Router();

routes.use(redisMiddleware);
let client = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort
});
client.connect()
routes.get("/posts", (request, response) => {
    GetPosts().then(
        response => response.json(),
        reason => Promise.reject(reason)
    ).then(
        data => {
            console.log(`Data Fetched from Server with process ID - ${process.pid}`);
            client.setEx("posts", 30, JSON.stringify(data));
            response.send(data);
        },
        reason => response.status(500).send("Something went wrong!")
    );
});;

module.exports = routes;