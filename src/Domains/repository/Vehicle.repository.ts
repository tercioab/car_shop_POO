import IVehiclePersistence from './IVehicle.persistence';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export default class VehicleRepository<T extends Partial<any>> {
  constructor(private IPersistence: IVehiclePersistence) { }
    
  public create = async (obj: T) => this.IPersistence.create(obj);
  public findAll = async () => this.IPersistence.findAll();
  public findById = async (id: string) => this.IPersistence.findById(id);
  public updateById = async (id: string, vehicle: T) => this.IPersistence.updateById(id, vehicle);
  
  public excludeById = async (id:string) => { await this.IPersistence.excludeById(id); };
}