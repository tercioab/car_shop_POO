import IMotocile from '../Interfaces/IMotorcycle';
import Veicle from './Vehicle';

export default class Motorcycle extends Veicle {
  private category: string;
  private engineCapacity: number;
    
  constructor(veicle: IMotocile) {
    super(veicle);
    this.category = veicle.category;
    this.engineCapacity = veicle.engineCapacity;
  }
}