import express from 'express';
import carRouter from './routes/Car.routes';
import motocicleRouter from './routes/Motorcycle.routes';

const app = express();
app.use(express.json());

app.use('/cars', carRouter);
app.use('/motorcycles', motocicleRouter);
export default app;
