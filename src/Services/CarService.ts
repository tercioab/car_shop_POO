import CarDomains from '../Domains/Car';
import VehicleUtils from '../utils/VehicleUtils';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private _carODM : CarODM;
  constructor() {
    this._carODM = new CarODM();
  }

  public async create(car: ICar) {
    const newCar = await this._carODM.create(car);
    return new VehicleUtils(CarDomains, newCar).createVehicleDomain();
  }

  public async findAll() {
    const allCars = await this._carODM.findAll();
    return allCars
      .map((Car) => new VehicleUtils(CarDomains, Car).createVehicleDomain());
  }

  public async findById(id: string) {
    const car = await this._carODM.findById(id);
    return new VehicleUtils(CarDomains, car[0]).createVehicleDomain();
  }

  public async updateById(id: string, vehicle: ICar) {
    const car = await this._carODM.updateById(id, vehicle);
    return new VehicleUtils(CarDomains, car).createVehicleDomain();
  }
}