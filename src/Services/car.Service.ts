import CarDomains from '../Domains/Car';
import ICar from '../Interfaces/ICar';

import VehicleRepository from '../Domains/repository/Vehicle.repository';

export default class CarService {
  constructor(private Repository: VehicleRepository<ICar>) {}
  public async create(car: ICar) {
    const newCar = await this.Repository.create(car);
    return new CarDomains(newCar);
  }

  public async findAll() {
    const allCars = await this.Repository.findAll();
    return allCars
      .map((car) => new CarDomains(car));
  }

  public async findById(id: string) {
    const car = await this.Repository.findById(id);
    if (car) { return new CarDomains(car); }
  }

  public async updateById(id: string, vehicle: ICar) {
    const car = await this.Repository.updateById(id, vehicle);
    if (car) { return new CarDomains(car); }
  }

  public async excludeById(id: string) {
    return this.Repository.excludeById(id);
  }
}