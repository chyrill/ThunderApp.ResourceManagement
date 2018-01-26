import { Router } from 'express';
import * as CityController from './city.controller';

const routes = new Router();

routes.post('', CityController.create);
routes.get('', CityController.getAll);

export default routes;