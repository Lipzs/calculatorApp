import express from 'express';
import CalcController from './controllers/CalcController.js';

const routes = express.Router();
const calcController = new CalcController();

routes.post('/sum', calcController.sum);
routes.post('/subtract', calcController.subtract);
routes.post('/multiply', calcController.multiply);
routes.post('/divide', calcController.divide);

export default routes;