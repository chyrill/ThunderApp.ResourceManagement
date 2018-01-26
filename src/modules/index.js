import uploadRoutes from './upload/upload.routes';
import CityRoutes from './city/city.routes';
import CountryRoutes from './country/country.routes';
import StateRoutes from './state/state.routes';

export default app =>{
  app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use('/api/v1/upload',uploadRoutes);
  app.use('/api/v1/city', CityRoutes);
  app.use('/api/v1/country', CountryRoutes);
  app.use('/api/v1/state', StateRoutes);
};
