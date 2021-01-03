import { create, findOne } from '../controllers/events-controller.js';
import asyncErrorHandler from '../middlewares/async-error-handler.js';

const BASE_PATH = '/events';
const ID_PATH_PARAM = '/:eventId';

export default (app) => {
  app.post(`${BASE_PATH}`, asyncErrorHandler(create));

  app.get(`${BASE_PATH}${ID_PATH_PARAM}`, asyncErrorHandler(findOne));
};
