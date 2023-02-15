import { Router } from 'express';
import MotocicleController from '../Controllers/MotocicleController';

const router = Router();

router.post('/', (res, req, next) => new MotocicleController(res, req, next).create());

export default router;