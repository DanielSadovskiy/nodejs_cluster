module.exports = {
  apps : [{
    name: 'NodeJS Instance ',
    script: 'server.js',
    instances: 2,
    exec_mode : "cluster",
    watch: true,
    autorestart: true,
  },
  {
    name: "Worker1",
    script: 'workers/worker1.js',
    instances: 1,
  },
  {
    name: "Worker2",
    script: 'workers/worker2.js',
    instances: 1,
  }
]
};
