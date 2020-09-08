const app = require('./index');
const http = require('http');
const cfg = require('./configs/config');
const server = http.createServer(app);

server.listen(cfg.port, async() => {
  console.log('listening', cfg.port.toString());
});

module.exports = server;