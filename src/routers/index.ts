import { Router } from 'express';
import carRouter from './Car.router';

const routers = Router();

routers.use(carRouter);

export default routers;