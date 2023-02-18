import express from 'express';
import carRouter from './routers/Car.router';
import motocicleRouter from './routers/Motorcycle.router';

const app = express();
app.use(express.json());

app.use('/cars', carRouter);
app.use('/motorcycles', motocicleRouter);
export default app;
