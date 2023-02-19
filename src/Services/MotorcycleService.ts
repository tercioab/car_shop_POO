import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import MotorcycleDomains from '../Domains/Motorcycle';

export default class MotorcycleService {
  private _MotorcycleODM: MotorcycleODM;
  constructor() {
    this._MotorcycleODM = new MotorcycleODM();
  }

  public createVehicleDomain(motorcycle: IMotorcycle) {
    if (motorcycle) {
      return new MotorcycleDomains(motorcycle);
    } return null;
  }
    
  public async create(car: IMotorcycle) {
    const newMotorcycle = await this._MotorcycleODM.create(car);
    return this.createVehicleDomain(newMotorcycle);
  }

  public async findAll() {
    const allMotorcycle = await this._MotorcycleODM.findAll();
    return allMotorcycle
      .map((Motorcycle) => this.createVehicleDomain(Motorcycle));
  }

  public async findById(id: string) {
    const Motorcycle = await this._MotorcycleODM.findById(id);
    if (Motorcycle) { return this.createVehicleDomain(Motorcycle); }
  }

  public async updateById(id: string, veicle: IMotorcycle) {
    const motorcycle = await this._MotorcycleODM.updateById(id, veicle);
    if (motorcycle) { return this.createVehicleDomain(motorcycle); }
  }

  public async excludeById(id: string) {
    return this._MotorcycleODM.excludeById(id);
  }
}