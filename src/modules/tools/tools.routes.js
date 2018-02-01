import { Router } from 'express';
import * as ToolsController from './tools.controller';


const routes = new Router();

routes.post('/converthtmlpdf', ToolsController.convertHTMLtoPDF);


export default routes;