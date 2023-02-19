import { Router } from 'express';
import carRouter from './Car.routes';

const routers = Router();

routers.use(carRouter);

export default routers;