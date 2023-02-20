import IVeicle from '../../Interfaces/IVehicle';

export default class Vehicle { 
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
    
  constructor(veicle: IVeicle) {
    this.id = veicle.id;
    this.model = veicle.model;
    this.year = veicle.year;
    this.color = veicle.color;
    this.status = veicle.status || false;
    this.buyValue = veicle.buyValue;
  }
}