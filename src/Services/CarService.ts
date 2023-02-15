import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CarDomains from '../Domains/Car';

export default class CarService {
  private _CarODM: CarODM;
  constructor() {
    this._CarODM = new CarODM();
  }
  
  private createcarDomain(car: ICar | null) {
    if (car) {
      return new CarDomains(car);
    }
    return null;
  }
    
  public async create(car: ICar) {
    const newCar = await this._CarODM.create(car);
    return this.createcarDomain(newCar);
  }

  public async findAll() {
    const allCars = await this._CarODM.findAll();
    return allCars.map((cars) => this.createcarDomain(cars));
  }

  public async findById(id: string) {
    const cars = await this._CarODM.findById(id);
    return this.createcarDomain(cars[0]);
  }

  public async updateById(id: string, veicle: ICar) {
    const car = await this._CarODM.updateById(id, veicle);
    return this.createcarDomain(car);
  }
}