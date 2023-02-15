import IVeicle from './IVehicle';

export default interface ICar extends IVeicle {
  doorsQty: number, 
  seatsQty:number
}