import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import MotorcycleDomais from '../Domains/Motorcycle';
import VehicleUtils from '../utils/VehicleGenerateDomains';

export default class MotorcycleService {
  private _MotorcycleODM: MotorcycleODM;
  constructor() {
    this._MotorcycleODM = new MotorcycleODM();
  }
    
  public async create(car: IMotorcycle) {
    const newMotorcycle = await this._MotorcycleODM.create(car);
    return new VehicleUtils(MotorcycleDomais, newMotorcycle).createVehicleDomain();
  }

  public async findAll() {
    const allMotorcycle = await this._MotorcycleODM.findAll();
    return allMotorcycle
      .map((Motorcycle) => new VehicleUtils(MotorcycleDomais, Motorcycle).createVehicleDomain());
  }

  public async findById(id: string) {
    const Motorcycle = await this._MotorcycleODM.findById(id);
    return new VehicleUtils(MotorcycleDomais, Motorcycle).createVehicleDomain();
  }

  public async updateById(id: string, veicle: IMotorcycle) {
    const motorcycle = await this._MotorcycleODM.updateById(id, veicle);
    return new VehicleUtils(MotorcycleDomais, motorcycle).createVehicleDomain();
  }

  public async excludeById(id: string) {
    return this._MotorcycleODM.excludeById(id);
  }
}