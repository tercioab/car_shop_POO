import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/car.Service';

export default class CarController {
  ERROR_MESSAGE: string;

  constructor(private service: CarService) {
    this.ERROR_MESSAGE = 'Car not found';
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const car = req.body;

    try {
      const newCar = await this.service.create(car);
      return res.status(201).json(newCar);
    } catch (e) {
      next(e);
    }
  }

  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const allCars = await this.service.findAll();
      return res.status(200).json(allCars);
    } catch (e) {
      next(e);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const car = await this.service.findById(id);
      return res.status(200).json(car);
    } catch (e) {
      next(e);
    }
  }

  public async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const car = await this.service.updateById(id, body);
    return res.status(200).json(car);
  }

  public async excludeById(req: Request, res: Response) {
    const { id } = req.params;
    await this.service.excludeById(id);
    return res.sendStatus(204);
  }
}