import IVeicle from './IVehicle';
import MotorcycleCategory from '../types/MotocicleCategory.types';

export default interface IMotorcycle extends IVeicle {
  category: MotorcycleCategory,
  engineCapacity: number
}