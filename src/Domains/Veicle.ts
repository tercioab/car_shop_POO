import IVeicle from '../Interfaces/IVeicle';

export default class Veicle { 
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
    
  public setId(id:string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }
    
  public setModel(model:string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }
    
  public setYear(year:number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }
    
  public setColor(color:string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }
    
  public setStatus(status:boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }
    
  public setBuyValue(buyValue:number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }
}