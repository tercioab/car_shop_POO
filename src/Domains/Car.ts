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

  public setDoorsQty(doorsQty:number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }
    
  public setSeatsQty(seatsQty:number) {
    this.doorsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}