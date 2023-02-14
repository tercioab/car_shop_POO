import ICar from '../Interfaces/ICar';

export default class CarDomains { 
  private _id: string | undefined;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status?: boolean;
  private _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;
    
  constructor(car: ICar) {
    this._id = car.id;
    this._model = car.model;
    this._year = car.year;
    this._color = car.color;
    this._status = car.status || false;
    this._buyValue = car.buyValue;
    this._doorsQty = car.doorsQty;
    this._seatsQty = car.seatsQty;
  }
    
  public setId(id:string) {
    this._id = id;
  }

  public getId() {
    return this._id;
  }
    
  public setModel(model:string) {
    this._model = model;
  }

  public getModel() {
    return this._model;
  }
    
  public setYear(year:number) {
    this._year = year;
  }

  public getYear() {
    return this._year;
  }
    
  public setColor(color:string) {
    this._color = color;
  }

  public getColor() {
    return this._color;
  }
    
  public setStatus(status:boolean) {
    this._status = status;
  }

  public getStatus() {
    return this._status;
  }
    
  public setBuyValue(buyValue:number) {
    this._buyValue = buyValue;
  }

  public getBuyValue() {
    return this._buyValue;
  }
      
  public setDoorsQty(doorsQty:number) {
    this._doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this._doorsQty;
  }
    
  public setSeatsQty(seatsQty:number) {
    this._doorsQty = seatsQty;
  }

  public getSeatsQty() {
    return this._seatsQty;
  }
}