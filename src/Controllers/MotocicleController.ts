import { Request, Response, NextFunction } from 'express';
import IMotocile from '../Interfaces/IMotorcycle';
import MotocicleService from '../Services/MotocicleService';

export default class MotocicleController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: MotocicleService;
    
  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new MotocicleService();
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
        return this._res.status(404).json({ message: 'Motorcycle not found' });
      }

      return this._res.status(200).json(Motorcycle);
    } catch (e) {
      this._next(e);
    }
  }
}