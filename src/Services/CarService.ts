import CarDomains from '../Domains/Car';
import VehicleGenerateDomais from '../utils/VehicleGenerateDomains';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private _carODM : CarODM;
  constructor() {
    this._carODM = new CarODM();
  }

  public async create(car: ICar) {
    const newCar = await this._carODM.create(car);
    return new VehicleGenerateDomais(CarDomains, newCar).createVehicleDomain();
  }

  public async findAll() {
    const allCars = await this._carODM.findAll();
    return allCars
      .map((Car) => new VehicleGenerateDomais(CarDomains, Car).createVehicleDomain());
  }

  public async findById(id: string) {
    const car = await this._carODM.findById(id);
    return new VehicleGenerateDomais(CarDomains, car[0]).createVehicleDomain();
  }

  public async updateById(id: string, vehicle: ICar) {
    const car = await this._carODM.updateById(id, vehicle);
    return new VehicleGenerateDomais(CarDomains, car).createVehicleDomain();
  }

  public async excludeById(id: string) {
    return this._carODM.excludeById(id);
  }
}