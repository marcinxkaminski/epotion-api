import { getStatistics } from '../controllers/statistics-controller.js';
import asyncErrorHandler from '../middlewares/async-error-handler.js';

const BASE_PATH = '/statistics';

export default (app) => {
  app.get(`${BASE_PATH}`, asyncErrorHandler(getStatistics));
};
