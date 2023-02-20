import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../Services/motorcycle.Service';
import MotorcycleODM from '../Models/MotorcycleODM';
import VehicleRepository from '../Domains/repository/Vehicle.repository';

export default async function ValidateMotorcycle(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const motorcycleODM = new MotorcycleODM();
  const vehicleRepository = new VehicleRepository(motorcycleODM);
  const car = await new MotorcycleService(vehicleRepository).findById(id);
  if (!car) {
    return res.status(404).json({ message: 'Motorcycle not found' });
  } next();
}