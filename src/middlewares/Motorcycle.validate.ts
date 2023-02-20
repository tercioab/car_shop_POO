import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../Domains/repository/motorcycle.repository';
import MotorcycleODM from '../Models/MotorcycleODM';

export default async function ValidateMotorcycle(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const motorcycleODM = new MotorcycleODM();
  const car = await new MotorcycleService(motorcycleODM).findById(id);
  if (!car) {
    return res.status(404).json({ message: 'Motorcycle not found' });
  } next();
}