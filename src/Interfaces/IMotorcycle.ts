import IVeicle from './IVehicle';

export default interface IMotorcycle extends IVeicle {
  category: string
  engineCapacity: number
}