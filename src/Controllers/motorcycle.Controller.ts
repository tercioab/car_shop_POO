import { Request, Response, NextFunction } from 'express';
import IMotocile from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Domains/repository/motorcycle.repository';

export default class MotorcycleController {
  constructor(private service: MotorcycleService) {} 
    
  public async create(req: Request, res: Response, next: NextFunction) {
    const Motorcycle: IMotocile = req.body;
    
    try {
      const newMotorcycle = await this.service.create(Motorcycle);
      return res.status(201).json(newMotorcycle);
    } catch (e) {
      next(e);
    }
  }

  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const allMotorcycle = await this.service.findAll();
      return res.status(200).json(allMotorcycle);
    } catch (e) {
      next(e);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const Motorcycle = await this.service.findById(id);      
      return res.status(200).json(Motorcycle);
    } catch (e) {
      next(e);
    }
  }

  public async updateById(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const Motorcycle = await this.service.updateById(id, body);
    return res.status(200).json(Motorcycle);
  }

  public async excludeById(req: Request, res: Response) {
    const { id } = req.params;
    await this.service.excludeById(id);
    return res.sendStatus(204);
  }
}