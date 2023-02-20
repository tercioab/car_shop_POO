import express from 'express';
import carRouter from './routes/Car.routes';
import motocicleRouter from './routes/Motorcycle.routes';
import ErrorHandler from './middlewares/Error';

const app = express();
app.use(express.json());

app.use('/cars', carRouter);
app.use('/motorcycles', motocicleRouter);
app.use(ErrorHandler.execute);
export default app;
