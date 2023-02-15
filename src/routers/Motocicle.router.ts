import { Router } from 'express';
import MotocicleController from '../Controllers/MotocicleController';
import validateId from '../middlewares/id.validate';

const router = Router();

router.post('/', (res, req, next) => new MotocicleController(res, req, next).create());

router.get('/', (res, req, next) => new MotocicleController(res, req, next).findAll());

router.get(
  '/:id', 
  validateId,
  (res, req, next) => new MotocicleController(res, req, next).findById(),
);
export default router;