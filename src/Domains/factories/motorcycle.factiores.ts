import MotorcycleController from '../../Controllers/motorcycle.Controller';
import MotorcycleService from '../repository/motorcycle.repository';
import MotorcycleODM from '../../Models/MotorcycleODM';

const motorcycleODM = new MotorcycleODM();
const motorcycleService = new MotorcycleService(motorcycleODM);
const motorcycleController = new MotorcycleController(motorcycleService);

export default motorcycleController;