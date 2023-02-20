import CarController from '../../Controllers/Car.controller';
import CarService from '../repository/car.repository';
import CarODM from '../../Models/CarODM';

const carODM = new CarODM();
const carService = new CarService(carODM);
const carController = new CarController(carService);

export default carController;