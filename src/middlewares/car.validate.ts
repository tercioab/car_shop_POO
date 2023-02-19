import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/car.Service';

export default async function ValidateCar(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const car = await new CarService().findById(id);
  if (!car) {
    return res.status(404).json({ message: 'Car not found' });
  } next();
}