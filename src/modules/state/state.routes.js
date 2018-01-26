import { Router } from 'express';
import * as StateController from './state.controller';

const routes = new Router();

routes.post('', StateController.create);
routes.get('', StateController.getAll);

export default routes;