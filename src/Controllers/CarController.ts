import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new CarService();
  }

  public async create() {
    const car: ICar = this._req.body;

    try {
      const newCar = await this._service.create(car);
      return this._res.status(201).json(newCar);
    } catch (e) {
      this._next(e);
    }
  }

  public async findAll() {
    try {
      const allCars = await this._service.findAll();
      return this._res.status(200).json(allCars);
    } catch (e) {
      this._next(e);
    }
  }

  public async findById() {
    try {
      const { id } = this._req.params;
      const car = await this._service.findById(id);
      if (car === undefined) return this._res.status(422).json({ message: 'Invalid mongo id' });
      if (!car) {
        return this._res.status(404).json({ message: 'Car not found' });
      }
      return this._res.status(200).json(car);
    } catch (e) {
      this._next(e);
    }
  }
}