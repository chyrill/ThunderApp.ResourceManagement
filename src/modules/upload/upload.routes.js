import * as uploadController from './upload.controller';
import {Router} from 'express';

const routes = new Router();

routes.post('',uploadController.upload);

export default routes;
