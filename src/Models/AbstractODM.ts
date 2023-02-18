import { model, Model, models, Schema } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected _model: Model<T>;
  protected _schema: Schema;
  protected _modelName: string;

  constructor(schema: Schema, modelName: string) {
    this._schema = schema;
    this._modelName = modelName;
    this._model = models[this._modelName] || model(this._modelName, this._schema);
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this._model.find({});
  }

  public async findById(id: string) {
    return this._model.find({ _id: id });
  } 
  
  public async updateById(id: string, veicle: Partial<T>) {
    return this._model.findByIdAndUpdate(
      { _id: id },
      { ...veicle },
      { new: true },
    );
  }

  public async excludeById(id: string) {
    return this._model.deleteOne({ id });
  }
}