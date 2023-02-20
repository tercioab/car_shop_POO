import ICar from '../Interfaces/ICar';
import Veicle from './Vehicle';

export default class Car extends Veicle {
  private doorsQty: number;
  private seatsQty: number;
    
  constructor(veicle: ICar) {
    super(veicle);
    this.doorsQty = veicle.doorsQty;
    this.seatsQty = veicle.seatsQty;
  }
}
