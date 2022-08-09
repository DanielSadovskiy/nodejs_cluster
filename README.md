# nodejs_cluster


loadtest -n 1000 -c 100 --rps 200 http://localhost:3000/?number=5

artillery quick --count 10 -n 20 http://localhost:3000/?number=5

pm2 start ecosystem.config.js

pm2 monit 

docker run --rm -it --hostname my-rabbit -p 15672:15672 -p 5672:5672 rabbitmq:3-management