import eventsRouter from './events-router.js';
import statisticsRouter from './statistics-router.js';

export default (app) => {
  if (!app) {
    console.error('App is required to connect the router');
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit();
  }

  eventsRouter(app);
  statisticsRouter(app);
};
