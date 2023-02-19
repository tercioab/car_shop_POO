import { Router } from 'express';
import validateId from '../middlewares/id.validate';
import ValidateMotorcycle from '../middlewares/Motorcycle.validate';
import motorcycleController from '../Domains/factories/motorcycle.factiores';

const router = Router();

router.post('/', (res, req, next) => motorcycleController.create(res, req, next));
router.get('/', (res, req, next) => motorcycleController.findAll(res, req, next));

router.get(
  '/:id', 
  validateId,
  ValidateMotorcycle,
  (res, req, next) => motorcycleController.findById(res, req, next),
);

router.put(
  '/:id',
  validateId,
  ValidateMotorcycle,
  (res, req) => motorcycleController.updateById(res, req),
);

router.delete(
  '/:id',
  validateId,
  ValidateMotorcycle,
  (res, req) => motorcycleController.excludeById(res, req),
);
export default router;