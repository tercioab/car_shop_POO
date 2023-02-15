import IVeicle from './IVehicle';
import MotorcycleCategory from '../types/MotocicleCategory.types';

export default interface IMotocile extends IVeicle {
  category: MotorcycleCategory,
  engineCapacity: number
}