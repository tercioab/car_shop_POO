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
}