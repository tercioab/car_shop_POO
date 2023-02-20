import MotorcycleController from '../../Controllers/motorcycle.Controller';
import MotorcycleService from '../../Services/motorcycle.Service';
import MotorcycleODM from '../../Models/MotorcycleODM';
import VehicleRepository from '../repository/Vehicle.repository';

const motorcycleODM = new MotorcycleODM();
const vehicleRepository = new VehicleRepository(motorcycleODM);
const motorcycleService = new MotorcycleService(vehicleRepository);
const motorcycleController = new MotorcycleController(motorcycleService);

export default motorcycleController;