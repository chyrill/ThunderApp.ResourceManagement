import express from 'express';
import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';
import ApiRoutes from './modules';
import path from 'path';

const app = express();

middlewaresConfig(app);
ApiRoutes(app);

app.use(express.static('public'));

app.listen(constants.PORT, err =>{
  if(err){
    throw err;
  }
  else {
    console.log(`
      Server running on PORT: ${constants.PORT}
      ==================================
      Running on ${process.env.NODE_ENV}
      ==================================
      `)
  }
});
