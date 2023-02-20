import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleDomains from '../Domains/Motorcycle';
import VehicleRepository from '../Domains/repository/Vehicle.repository';

export default class MotorcycleService {
  constructor(private Repository: VehicleRepository<IMotorcycle>) { }
  
  public async create(car: IMotorcycle) {
    const newMotorcycle = await this.Repository.create(car);
    return new MotorcycleDomains(newMotorcycle);
  }

  public async findAll() {
    const allMotorcycle = await this.Repository.findAll();
    return allMotorcycle
      .map((Motorcycle) => new MotorcycleDomains(Motorcycle));
  }

  public async findById(id: string) {
    const Motorcycle = await this.Repository.findById(id);
    if (Motorcycle) { return new MotorcycleDomains(Motorcycle); }
  }

  public async updateById(id: string, veicle: IMotorcycle) {
    const Motorcycle = await this.Repository.updateById(id, veicle);
    if (Motorcycle) { return new MotorcycleDomains(Motorcycle); }
  }

  public async excludeById(id: string) {
    return this.Repository.excludeById(id);
  }
}