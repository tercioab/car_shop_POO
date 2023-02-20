import { model, Model, models, Schema } from 'mongoose';
import IVehiclePersistence from '../Domains/repository/IVehicle.persistence';

export default abstract class AbstractODM<T> implements IVehiclePersistence {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async findById(id: string) {
    return this.model.findById(id);
  } 
  
  public async updateById(id: string, veicle: Partial<T>) {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...veicle },
      { new: true }, 
    );
  }

  public async excludeById(id: string) {
    return this.model.deleteOne({ id });
  }
}