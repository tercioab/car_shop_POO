import CarController from '../../Controllers/Car.controller';
import CarService from '../../Services/car.Service';
import CarODM from '../../Models/Car.mongoDB';
import VehicleRepository from '../repository/Vehicle.repository';
import IVehiclePersistence from '../repository/IVehicle.persistence';

const carODM:IVehiclePersistence = new CarODM();
const vehicleRepository = new VehicleRepository(carODM);
const carService = new CarService(vehicleRepository);
const carController = new CarController(carService);

export default carController;