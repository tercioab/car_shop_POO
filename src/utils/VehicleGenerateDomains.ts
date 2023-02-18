import VehicleDomains from '../Domains/Vehicle';
import IVehicle from '../Interfaces/IVehicle';

export default class VehicleGenerateDomains {
  private _VehicleDomains: typeof VehicleDomains; 
  private Vehicle: IVehicle | null;
  constructor(
    VehiclesDomains: typeof VehicleDomains,
    Vehicle: IVehicle | null,
  ) {
    this._VehicleDomains = VehiclesDomains;
    this.Vehicle = Vehicle;
  }
    
  public createVehicleDomain() {
    if (this.Vehicle) {
      return new this._VehicleDomains(this.Vehicle);
    }
  }
}