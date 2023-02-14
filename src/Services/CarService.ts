import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CarDomains from '../Domains/CarDomains';

export default class CarService {
  private createcarDomain(car: ICar | null) {
    if (car) {
      return new CarDomains(car);
    }
    return null;
  }
    
  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createcarDomain(newCar);
  }
}