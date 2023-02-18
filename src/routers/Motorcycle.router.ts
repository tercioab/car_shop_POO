import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import validateId from '../middlewares/id.validate';

const router = Router();

router.post('/', (res, req, next) => new MotorcycleController(res, req, next).create());

router.get('/', (res, req, next) => new MotorcycleController(res, req, next).findAll());

router.get(
  '/:id', 
  validateId,
  (res, req, next) => new MotorcycleController(res, req, next).findById(),
);

router.put(
  '/:id',
  validateId,
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

router.delete(
  '/:id',
  validateId,
  (req, res, next) => new MotorcycleController(req, res, next).excludeById(),
);
export default router;