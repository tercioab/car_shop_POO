import IMotorcycle from '../Interfaces/IMotorcycle';
import MotocicleODM from '../Models/MotocicleODM';
import MotocicleDomais from '../Domains/Motorcycle';

export default class MotocicleService {
  private _MotocicleODM: MotocicleODM;
  constructor() {
    this._MotocicleODM = new MotocicleODM();
  }
    
  private createMotocicleDomain(motocicle: IMotorcycle | null) {
    if (motocicle) {
      return new MotocicleDomais(motocicle);
    }
    return null;
  }
    
  public async create(motocicle:IMotorcycle) {
    const newMotocicle = await this._MotocicleODM.create(motocicle);
    return this.createMotocicleDomain(newMotocicle);
  }
    
  public async findAll() {
    const allMotocicles = await this._MotocicleODM.findAll();
    return allMotocicles.map((motocicles) => this.createMotocicleDomain(motocicles));
  }

  public async findById(id: string) {
    const Motorcycle = await this._MotocicleODM.findById(id);
    return this.createMotocicleDomain(Motorcycle[0]);
  }

  public async updateById(id: string, veicle: IMotorcycle) {
    const Motorcycle = await this._MotocicleODM.updateById(id, veicle);
    return this.createMotocicleDomain(Motorcycle);
  }
}