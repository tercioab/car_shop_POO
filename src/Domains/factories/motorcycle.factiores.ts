import MotorcycleController from '../../Controllers/motorcycle.Controller';
import MotorcycleService from '../../Services/motorcycle.Service';
import MotorcycleODM from '../../Models/MotorcycleODM';

const motorcycleODM = new MotorcycleODM();
const motorcycleService = new MotorcycleService(motorcycleODM);
const motorcycleController = new MotorcycleController(motorcycleService);

export default motorcycleController;