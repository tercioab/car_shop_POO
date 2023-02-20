import CarDomains from '../Domains/entities/Car';
import ICar from '../Interfaces/ICar';
// import IVehiclePersistence from '../Domains/repository/IVehicle.persistence';

import VehicleRepository from '../Domains/repository/Vehicle.repository';

export default class CarService {
  constructor(private Repository: VehicleRepository<ICar>) {}
  public createVehicleDomain(car: ICar) {
    if (car) {
      return new CarDomains(car);
    } return null;
  }

  public async create(car: ICar) {
    const newCar = await this.Repository.create(car);
    return this.createVehicleDomain(newCar);
  }

  public async findAll() {
    const allCars = await this.Repository.findAll();
    return allCars
      .map((car) => this.createVehicleDomain(car));
  }

  public async findById(id: string) {
    const car = await this.Repository.findById(id);
    if (car) { return this.createVehicleDomain(car); }
  }

  public async updateById(id: string, vehicle: ICar) {
    const car = await this.Repository.updateById(id, vehicle);
    if (car) { return this.createVehicleDomain(car); }
  }

  public async excludeById(id: string) {
    return this.Repository.excludeById(id);
  }
}