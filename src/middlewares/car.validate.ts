import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/car.Service';
import CarODM from '../Models/CarODM';
import VehicleRepository from '../Domains/repository/Vehicle.repository';

export default async function ValidateCar(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const carODM = new CarODM();
  const vehicleRepository = new VehicleRepository(carODM);
  const car = await new CarService(vehicleRepository).findById(id);
  if (!car) {
    return res.status(404).json({ message: 'Car not found' });
  } next();
}