import cluster from 'cluster';
import os from 'os';

import app from './app.js';

const CPUS = os.cpus();

if (cluster.isMaster) {
  cluster.on('listening', (worker) => {
    console.warn('Cluster %d connected', worker.process.pid);
  });

  cluster.on('disconnect', (worker) => {
    console.warn('Cluster %d disconnected', worker.process.pid);
  });

  cluster.on('exit', (worker) => {
    console.warn('Cluster %d is dead', worker.process.pid);
    cluster.fork();
  });

  CPUS.forEach(() => cluster.fork());
} else {
  app();
}
