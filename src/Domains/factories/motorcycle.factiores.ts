import MotorcycleController from '../../Controllers/motorcycle.Controller';
import MotorcycleService from '../../Services/motorcycle.Service';
import MotorcycleODM from '../../Models/Motorcycle.mongoDB';
import VehicleRepository from '../repository/Vehicle.repository';
import IVehiclePersistence from '../repository/IVehicle.persistence';

const motorcycleODM:IVehiclePersistence = new MotorcycleODM();
const vehicleRepository = new VehicleRepository(motorcycleODM);
const motorcycleService = new MotorcycleService(vehicleRepository);
const motorcycleController = new MotorcycleController(motorcycleService);

export default motorcycleController;    