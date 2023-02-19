import { Router } from 'express';
import validateId from '../middlewares/id.validate';
import ValidateCar from '../middlewares/car.validate';
import carController from '../Domains/factories/car.factories';

const router = Router();

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