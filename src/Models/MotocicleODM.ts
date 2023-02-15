import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotocicle from '../Interfaces/IMotorcycle';

export default class MotocicleODM extends AbstractODM<IMotocicle> {
  constructor() {
    const schema = new Schema<IMotocicle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'motocicles');
  }
}