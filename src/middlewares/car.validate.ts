import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/car.Service';
import CarODM from '../Models/CarODM';

export default async function ValidateCar(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const carODM = new CarODM();
  const car = await new CarService(carODM).findById(id);
  if (!car) {
    return res.status(404).json({ message: 'Car not found' });
  } next();
}