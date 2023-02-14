import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post(
  '/',
  (res, req, next) => new CarController(res, req, next).create(),
);

export default router;