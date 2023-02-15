import { Router } from 'express';
import CarController from '../Controllers/CarController';
import validateId from '../middlewares/id.validate';

const router = Router();

router.post(
  '/',
  (res, req, next) => new CarController(res, req, next).create(),
);

router.get('/', (res, req, next) => new CarController(res, req, next).findAll());

router.get('/:id', validateId, (res, req, next) => new CarController(res, req, next).findById());

router.put('/:id', validateId, (req, res, next) => new CarController(req, res, next).updateById());

export default router;