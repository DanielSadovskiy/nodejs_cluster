module.exports = {
  apps : [{
    name: 'NodeJS Cluster',
    script: 'server.js',
    instances: 'MAX',
    exec_mode : "cluster",
    watch: true,
    autorestart: true,

  }]
};
