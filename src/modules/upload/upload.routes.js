import * as uploadController from './upload.controller';
import {Router} from 'express';

const routes = new Router();

routes.post('', uploadController.upload);
routes.get('/download/:filename', uploadController.download);

export default routes;
