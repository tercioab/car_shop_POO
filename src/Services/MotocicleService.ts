import IMotocile from '../Interfaces/IMotorcycle';
import MotocicleODM from '../Models/MotocicleODM';
import MotocicleDomais from '../Domains/Motorcycle';

export default class MotocicleService {
  private _MotocicleODM: MotocicleODM;
  constructor() {
    this._MotocicleODM = new MotocicleODM();
  }
    
  private createMotocicleDomain(motocicle: IMotocile | null) {
    if (motocicle) {
      return new MotocicleDomais(motocicle);
    }
    return null;
  }
    
  public async create(motocicle: IMotocile) {
    const newMotocicle = await this._MotocicleODM.create(motocicle);
    return this.createMotocicleDomain(newMotocicle);
  }
    
  public async findAll() {
    const allMotocicles = await this._MotocicleODM.findAll();
    return allMotocicles.map((motocicles) => this.createMotocicleDomain(motocicles));
  }
}