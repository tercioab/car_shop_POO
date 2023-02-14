import IVeicle from './IVeicle';

export default interface ICar extends IVeicle {
  doorsQty: number, 
  seatsQty:number
}