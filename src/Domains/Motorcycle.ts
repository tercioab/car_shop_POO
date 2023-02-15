import IMotocile from '../Interfaces/IMotorcycle';
import Veicle from './Vehicle';
import MotorcycleCategory from '../types/MotocicleCategory.types';

export default class Motorcycle extends Veicle {
  private category: MotorcycleCategory;
  private engineCapacity: number;
    
  constructor(veicle: IMotocile) {
    super(veicle);
    this.category = veicle.category;
    this.engineCapacity = veicle.engineCapacity;
  }
    
  public setCategory(category: MotorcycleCategory) {
    this.category = category;
  }

  public getCategory() {
    return this.category;
  }

  public setEngineCapacity(engine: number) {
    this.engineCapacity = engine;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}