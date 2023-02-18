import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import carMocks from '../mocks/car.mocks';

describe('teste car service', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('01. testa se é possivel inserir um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(carMocks.carOutPut);
    const result = await new CarService().create(carMocks.carInput);
    expect(result).to.be.deep.equal(carMocks.carOutPut);
  });
    
  it('02. testa se é possivel retornar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves([carMocks.carOutPut]);
    const result = await new CarService().findAll();
    expect(result).to.be.deep.equal([carMocks.carOutPut]);
  });

  it('03. testa se é possivel retornar o carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4'; 
    sinon.stub(Model, 'findById').resolves(carMocks.carOutPut);
    const result = await new CarService().findById(id);
    expect(result).to.be.deep.equal(carMocks.carOutPut);
  });

  it('04. testa se é possivel atualizar um carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4';
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMocks.carOutPut);
    const result = await new CarService().updateById(id, carMocks.carInput);
    expect(result).to.be.deep.equal(carMocks.carOutPut);
  });
  
  it('05. testa se é possivel excluir um carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4';
    sinon.stub(Model, 'deleteOne').resolves({ acknowledged: true, deletedCount: 1 });
    const result = await new CarService().excludeById(id);
    expect(result).to.be.deep.equal({ acknowledged: true, deletedCount: 1 });
  });
});