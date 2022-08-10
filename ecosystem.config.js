module.exports = {
  apps : [{
    name: 'NodeJS Instance 1',
    script: 'server.js',
    args: "Instance 1",
    instances: 1,
    watch: true,
    autorestart: true,
    env: {
      NODE_ENV: 'development',
      port: 3000
    }
  },
  {
    name: 'NodeJS Instance 2',
    script: 'server.js',
    args: "Instance 2",
    instances: 1,
    watch: true,
    autorestart: true,
    env: {
      NODE_ENV: 'development',
      port: 3001
    }
  },
  {
    name: 'NodeJS Instance 2',
    script: 'server.js',
    args: "Instance 2",
    instances: 1,
    watch: true,
    autorestart: true,
    env: {
      NODE_ENV: 'development',
      port: 3002
    }
  },
]
};
