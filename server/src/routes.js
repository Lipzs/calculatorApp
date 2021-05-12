import express from 'express';
import CalcController from './controllers/CalcController.js';

const routes = express.Router();
const calcController = new CalcController();

routes.post('/calcule', function(req, res) {
  calcController.calcule
});

export default routes;