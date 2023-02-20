import IMotorcycle from '../../Interfaces/IMotorcycle';
import MotorcycleDomains from '../entities/Motorcycle';
import IVehiclePersistence from './IVehicle.persistence';

export default class MotorcycleService {
  constructor(private motorcycleODM: IVehiclePersistence) {}

  public createVehicleDomain(motorcycle: IMotorcycle) {
    if (motorcycle) {
      return new MotorcycleDomains(motorcycle);
    } return null;
  }
    
  public async create(car: IMotorcycle) {
    const newMotorcycle = await this.motorcycleODM.create(car);
    return this.createVehicleDomain(newMotorcycle);
  }

  public async findAll() {
    const allMotorcycle = await this.motorcycleODM.findAll();
    return allMotorcycle
      .map((Motorcycle) => this.createVehicleDomain(Motorcycle));
  }

  public async findById(id: string) {
    const Motorcycle = await this.motorcycleODM.findById(id);
    if (Motorcycle) { return this.createVehicleDomain(Motorcycle); }
  }

  public async updateById(id: string, veicle: IMotorcycle) {
    const motorcycle = await this.motorcycleODM.updateById(id, veicle);
    if (motorcycle) { return this.createVehicleDomain(motorcycle); }
  }

  public async excludeById(id: string) {
    return this.motorcycleODM.excludeById(id);
  }
}