import { Router } from 'express';
import * as CountryController from './country.controller';

const routes = new Router();

routes.post('', CountryController.create);
routes.get('', CountryController.getAll);

export default routes;