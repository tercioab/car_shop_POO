import { Request, Response, NextFunction } from 'express';
import IMotocile from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/motorcycle.Service';

export default class MotorcycleController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: MotorcycleService;
    
  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new MotorcycleService();
  } 
    
  public async create() {
    const Motorcycle: IMotocile = this._req.body;
    
    try {
      const newMotorcycle = await this._service.create(Motorcycle);
      return this._res.status(201).json(newMotorcycle);
    } catch (e) {
      this._next(e);
    }
  }

  public async findAll() {
    try {
      const allMotorcycle = await this._service.findAll();
      return this._res.status(200).json(allMotorcycle);
    } catch (e) {
      this._next(e);
    }
  }

  public async findById() {
    try {
      const { id } = this._req.params;
      const Motorcycle = await this._service.findById(id);      
      return this._res.status(200).json(Motorcycle);
    } catch (e) {
      this._next(e);
    }
  }

  public async updateById() {
    const { id } = this._req.params;
    const { body } = this._req;
    const Motorcycle = await this._service.updateById(id, body);
    return this._res.status(200).json(Motorcycle);
  }

  public async excludeById() {
    const { id } = this._req.params;
    await this._service.excludeById(id);
    return this._res.sendStatus(204);
  }
}