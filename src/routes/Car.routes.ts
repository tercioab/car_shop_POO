import { Router } from 'express';
import CarController from '../Controllers/Car.controller';
import validateId from '../middlewares/id.validate';
import ValidateCar from '../middlewares/car.validate';
import CarService from '../Services/car.Service';

const router = Router();

const carService = new CarService();
const carController = new CarController(carService);

router.post(
  '/',
  (req, res, next) => carController.create(req, res, next),
);

router.get('/', (req, res, next) => carController.findAll(req, res, next));

router.get(
  '/:id', 
  validateId, 
  ValidateCar,
  (req, res, next) => carController.findById(req, res, next),
);

router.put(
  '/:id',
  validateId,
  ValidateCar,
  (req, res) => carController.updateById(req, res),
);

router
  .delete(
    '/:id',
    validateId,
    ValidateCar,
    (req, res) => carController.excludeById(req, res),
  );
export default router;