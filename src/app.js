import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { CORS, PORT } from './config.js';
import connectDB from './database/connector.js';
import connectRouter from './routes/router.js';

export default () => {
  const app = express();

  app.use(morgan('common'));
  app.use(helmet());
  app.use(cors(CORS));
  app.use(compression());
  app.use(bodyParser.json());

  connectDB();
  connectRouter(app);

  app.listen(PORT);
};
