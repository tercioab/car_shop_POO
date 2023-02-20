import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleDomains from '../Domains/entities/Motorcycle';
import VehicleRepository from '../Domains/repository/Vehicle.repository';

export default class MotorcycleService {
  constructor(private Repository: VehicleRepository<IMotorcycle>) {}

  public createVehicleDomain(motorcycle: IMotorcycle) {
    if (motorcycle) {
      return new MotorcycleDomains(motorcycle);
    } return null;
  }
    
  public async create(car: IMotorcycle) {
    const newMotorcycle = await this.Repository.create(car);
    return this.createVehicleDomain(newMotorcycle);
  }

  public async findAll() {
    const allMotorcycle = await this.Repository.findAll();
    return allMotorcycle
      .map((Motorcycle) => this.createVehicleDomain(Motorcycle));
  }

  public async findById(id: string) {
    const Motorcycle = await this.Repository.findById(id);
    if (Motorcycle) { return this.createVehicleDomain(Motorcycle); }
  }

  public async updateById(id: string, veicle: IMotorcycle) {
    const motorcycle = await this.Repository.updateById(id, veicle);
    if (motorcycle) { return this.createVehicleDomain(motorcycle); }
  }

  public async excludeById(id: string) {
    return this.Repository.excludeById(id);
  }
}