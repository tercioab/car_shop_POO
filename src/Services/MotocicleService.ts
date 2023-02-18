import IMotorcycle from '../Interfaces/IMotorcycle';
import MotocicleODM from '../Models/MotocicleODM';
import MotocicleDomais from '../Domains/Motorcycle';
import VehicleUtils from '../utils/VehicleUtils';

export default class MotocicleService {
  private _MotocicleODM: MotocicleODM;
  constructor() {
    this._MotocicleODM = new MotocicleODM();
  }
    
  public async create(car: IMotorcycle) {
    const newCar = await this._MotocicleODM.create(car);
    return new VehicleUtils(MotocicleDomais, newCar).createVehicleDomain();
  }

  public async findAll() {
    const allCars = await this._MotocicleODM.findAll();
    return allCars.map((cars) => new VehicleUtils(MotocicleDomais, cars).createVehicleDomain());
  }

  public async findById(id: string) {
    const cars = await this._MotocicleODM.findById(id);
    return new VehicleUtils(MotocicleDomais, cars[0]).createVehicleDomain();
  }

  public async updateById(id: string, veicle: IMotorcycle) {
    const car = await this._MotocicleODM.updateById(id, veicle);
    return new VehicleUtils(MotocicleDomais, car).createVehicleDomain();
  }
}