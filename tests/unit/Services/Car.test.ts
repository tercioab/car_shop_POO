import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/car.Service';
import carMocks from '../mocks/car.mocks';
import CarODM from '../../../src/Models/CarODM';
import VehicleRepository from '../../../src/Domains/repository/Vehicle.repository';

describe('teste car service', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('01. testa se é possivel inserir um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(carMocks.OutPut);
    const carODM = new CarODM();
    const vehicleRepository = new VehicleRepository(carODM);
    const result = await new CarService(vehicleRepository).create(carMocks.Input);
    expect(result).to.be.deep.equal(carMocks.OutPut);
  });
    
  it('02. testa se é possivel retornar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves([carMocks.OutPut]);
    const carODM = new CarODM();
    const vehicleRepository = new VehicleRepository(carODM);
    const result = await new CarService(vehicleRepository).findAll();
    expect(result).to.be.deep.equal([carMocks.OutPut]);
  });

  it('03. testa se é possivel retornar o carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4'; 
    sinon.stub(Model, 'findById').resolves(carMocks.OutPut);
    const carODM = new CarODM();
    const vehicleRepository = new VehicleRepository(carODM);
    const result = await new CarService(vehicleRepository).findById(id);
    expect(result).to.be.deep.equal(carMocks.OutPut);
  });

  it('04. testa se é possivel atualizar um carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4';
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMocks.OutPut);
    const carODM = new CarODM();
    const vehicleRepository = new VehicleRepository(carODM);
    const result = await new CarService(vehicleRepository).updateById(id, carMocks.Input);
    expect(result).to.be.deep.equal(carMocks.OutPut);
  });
  
  it('05. testa se é possivel excluir um carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4';
    sinon.stub(Model, 'deleteOne').resolves({ acknowledged: true, deletedCount: 1 });
    const carODM = new CarODM();
    const vehicleRepository = new VehicleRepository(carODM);
    const result = await new CarService(vehicleRepository).excludeById(id);
    expect(result).to.be.deep.equal({ acknowledged: true, deletedCount: 1 });
  });
});