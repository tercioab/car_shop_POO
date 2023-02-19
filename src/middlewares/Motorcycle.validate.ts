import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../Services/motorcycle.Service';

export default async function ValidateMotorcycle(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const car = await new MotorcycleService().findById(id);
  if (!car) {
    return res.status(404).json({ message: 'Motorcycle not found' });
  } next();
}