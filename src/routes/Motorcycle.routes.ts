import { Router } from 'express';
import MotorcycleController from '../Controllers/motorcycle.Controller';
import validateId from '../middlewares/id.validate';
import ValidateMotorcycle from '../middlewares/Motorcycle.validate';

const router = Router();

router.post('/', (res, req, next) => new MotorcycleController(res, req, next).create());

router.get('/', (res, req, next) => new MotorcycleController(res, req, next).findAll());

router.get(
  '/:id', 
  validateId,
  ValidateMotorcycle,
  (res, req, next) => new MotorcycleController(res, req, next).findById(),
);

router.put(
  '/:id',
  validateId,
  ValidateMotorcycle,
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

router.delete(
  '/:id',
  validateId,
  ValidateMotorcycle,
  (req, res, next) => new MotorcycleController(req, res, next).excludeById(),
);
export default router;