import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post(
  '/',
  (res, req, next) => new CarController(res, req, next).create(),
);

router.get('/', (res, req, next) => new CarController(res, req, next).findAll());

router.get('/:id', (res, req, next) => new CarController(res, req, next).findById());

export default router;