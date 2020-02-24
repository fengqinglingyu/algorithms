const cluster = require('cluster');
const http = require('http');
const cpus = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  console.log('worker');
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end('hello world\n');
    })
    .listen(8001);
}
