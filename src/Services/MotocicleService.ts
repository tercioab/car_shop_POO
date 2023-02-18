import IMotorcycle from '../Interfaces/IMotorcycle';
import MotocicleODM from '../Models/MotocicleODM';
import MotocicleDomais from '../Domains/Motorcycle';
import VehicleUtils from '../utils/VehicleGenerateDomains';

export default class MotocicleService {
  private _MotocicleODM: MotocicleODM;
  constructor() {
    this._MotocicleODM = new MotocicleODM();
  }
    
  public async create(car: IMotorcycle) {
    const newMotorcycle = await this._MotocicleODM.create(car);
    return new VehicleUtils(MotocicleDomais, newMotorcycle).createVehicleDomain();
  }

  public async findAll() {
    const allMotorcycle = await this._MotocicleODM.findAll();
    return allMotorcycle
      .map((Motorcycle) => new VehicleUtils(MotocicleDomais, Motorcycle).createVehicleDomain());
  }

  public async findById(id: string) {
    const Motorcycle = await this._MotocicleODM.findById(id);
    return new VehicleUtils(MotocicleDomais, Motorcycle).createVehicleDomain();
  }

  public async updateById(id: string, veicle: IMotorcycle) {
    const motorcycle = await this._MotocicleODM.updateById(id, veicle);
    return new VehicleUtils(MotocicleDomais, motorcycle).createVehicleDomain();
  }

  public async excludeById(id: string) {
    return this._MotocicleODM.excludeById(id);
  }
}