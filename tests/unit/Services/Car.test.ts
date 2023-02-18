import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import carMocks from '../mocks/car.mocks';

describe('teste car service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('testa se é possivel inserir um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(carMocks.carOutPut);
    const carService = new CarService();
    const result = await carService.create(carMocks.carInput);
    expect(result).to.be.deep.equal(carMocks.carOutPut);
  });
    
  it('testa se é possivel retornar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves([carMocks.carOutPut]);
    const result = await new CarService().findAll();
    expect(result).to.be.deep.equal([carMocks.carOutPut]);
  });

  it('testa se é possivel retornar o carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4'; 
    sinon.stub(Model, 'findById').resolves(carMocks.carOutPut);
    const result = await new CarService().findById(id);
    expect(result).to.be.deep.equal(carMocks.carOutPut);
  });

  it('testa se é possivel atualizar um carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4';
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMocks.carOutPut);
    const carService = new CarService();
    const result = await carService.updateById(id, carMocks.carInput);
    expect(result).to.be.deep.equal(carMocks.carOutPut);
  });
  
  it('testa se é possivel excluir um carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4';
    sinon.stub(Model, 'deleteOne').resolves({ acknowledged: true, deletedCount: 1 });
    const carService = new CarService();
    const result = await carService.excludeById(id);
    expect(result).to.be.deep.equal({ acknowledged: true, deletedCount: 1 });
  });
});