import CarController from '../../Controllers/Car.controller';
import CarService from '../../Services/car.Service';
import CarODM from '../../Models/CarODM';
import VehicleRepository from '../repository/Vehicle.repository';

const carODM = new CarODM();
const vehicleRepository = new VehicleRepository(carODM);
const carService = new CarService(vehicleRepository);
const carController = new CarController(carService);

export default carController;