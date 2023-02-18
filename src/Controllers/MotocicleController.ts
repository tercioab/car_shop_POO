import { Request, Response, NextFunction } from 'express';
import IMotocile from '../Interfaces/IMotorcycle';
import MotocicleService from '../Services/MotocicleService';

export default class MotocicleController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: MotocicleService;
  ERROR_MESSAGE: string;
    
  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new MotocicleService();
    this.ERROR_MESSAGE = 'Motorcycle not found';
  } 
    
  public async create() {
    const motocicle: IMotocile = this._req.body;
    
    try {
      const newMotocicle = await this._service.create(motocicle);
      return this._res.status(201).json(newMotocicle);
    } catch (e) {
      this._next(e);
    }
  }

  public async findAll() {
    try {
      const allMotocicles = await this._service.findAll();
      return this._res.status(200).json(allMotocicles);
    } catch (e) {
      this._next(e);
    }
  }

  public async findById() {
    try {
      const { id } = this._req.params;
      const Motorcycle = await this._service.findById(id);
  
      if (!Motorcycle) {
        return this._res.status(404).json({ message: this.ERROR_MESSAGE });
      }

      return this._res.status(200).json(Motorcycle);
    } catch (e) {
      this._next(e);
    }
  }

  public async updateById() {
    const { id } = this._req.params;
    const MotorcycleSearch = await this._service.findById(id);
    if (!MotorcycleSearch) {
      return this._res.status(404).json({ message: this.ERROR_MESSAGE });
    }
    const { body } = this._req;
    const Motorcycle = await this._service.updateById(id, body);
    return this._res.status(200).json(Motorcycle);
  }

  public async excludeById() {
    const { id } = this._req.params;
    const MotorcycleSearch = await this._service.findById(id);
    if (!MotorcycleSearch) {
      return this._res.status(404).json({ message: this.ERROR_MESSAGE });
    }
    await this._service.excludeById(id);
    return this._res.sendStatus(204);
  }
}