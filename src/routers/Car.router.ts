import { Router } from 'express';
import CarController from '../Controllers/Car.controller';
import validateId from '../middlewares/id.validate';
import ValidateCar from '../middlewares/car.validate';

const router = Router();

router.post(
  '/',
  (res, req, next) => new CarController(res, req, next).create(),
);

router.get('/', (res, req, next) => new CarController(res, req, next).findAll());

router.get(
  '/:id', 
  validateId, 
  ValidateCar,
  (res, req, next) => new CarController(res, req, next).findById(),
);

router.put(
  '/:id',
  validateId,
  ValidateCar,
  (req, res, next) => new CarController(req, res, next).updateById(),
);

router
  .delete(
    '/:id',
    validateId,
    ValidateCar,
    (req, res, next) => new CarController(req, res, next).excludeById(),
  );
export default router;