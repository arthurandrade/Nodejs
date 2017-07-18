var cluster = require('cluster');
var os = require('os');

var cpus = os.cpus();

if(cluster.isMaster) {
  console.log("master")
  cpus.forEach(function(){
    cluster.fork();
  });
  cluster.on('listening', worker => {
    console.log('cluster online '+ worker.process.pid);
  });
  cluster.on('exit', worker => {
    console.log('cluster %d desconectado', worker.process.pid);
    cluster.fork();
  })
} else {
  console.log("slave")
  require('./index.js');
}
