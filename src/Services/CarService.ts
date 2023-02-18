import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CarDomains from '../Domains/Car';
import VehicleUtils from '../utils/VehicleUtils';

export default class CarService {
  private _CarODM: CarODM;
  constructor() {
    this._CarODM = new CarODM();
  }
    
  public async create(car: ICar) {
    const newCar = await this._CarODM.create(car);
    return new VehicleUtils(CarDomains, newCar).createVehicleDomain();
  }

  public async findAll() {
    const allCars = await this._CarODM.findAll();
    return allCars.map((cars) => new VehicleUtils(CarDomains, cars).createVehicleDomain());
  }

  public async findById(id: string) {
    const cars = await this._CarODM.findById(id);
    return new VehicleUtils(CarDomains, cars[0]).createVehicleDomain();
  }

  public async updateById(id: string, veicle: ICar) {
    const car = await this._CarODM.updateById(id, veicle);
    return new VehicleUtils(CarDomains, car).createVehicleDomain();
  }
}