import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import CarDomain from '../../../src/Domains/Car';

describe('teste car service', function () {
  it('testa se é possivel inserir um novo carro', async function () {
    const carInput = {
      model: 'rari',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
      
    const carOutPut: CarDomain = new CarDomain({
      id: '63ec05e33484f70f15bce3b4',
      model: 'rari',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });
      
    sinon.stub(Model, 'create').resolves(carOutPut);
    const carService = new CarService();
    const result = await carService.create(carInput);
    expect(result).to.be.deep.equal(carOutPut);
  });
    
  it('testa se é possivel retornar todos os carros', async function () {
    const carOutPut: CarDomain = new CarDomain({
      id: '63ec05e33484f70f15bce3b4',
      model: 'rari',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });
            
    sinon.stub(Model, 'find').resolves([carOutPut]);
    const carService = new CarService();
    const result = await carService.findAll();
    expect(result).to.be.deep.equal([carOutPut]);
  });
    
  it('testa se é possivel retornar o carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4';
    const carOutPut = new CarDomain({
      id: '63ec05e33484f70f15bce3b4',
      model: 'rari',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });
              
    sinon.stub(Model, 'findById').resolves(carOutPut);
    const carService = new CarService();
    const result = await carService.findById(id);
    expect(result).to.be.deep.equal(carOutPut);
  });

  it('testa se é possivel atualizar um carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4';
    const carOutPut = new CarDomain({
      id: '63ec05e33484f70f15bce3b4',
      model: 'rari',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });
 
    const carInput = {
      model: 'lambo',
      year: 2023,
      color: 'Red',
      status: true,
      buyValue: 15000.99,
      doorsQty: 4,
      seatsQty: 5,
    };
      
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutPut);
    const carService = new CarService();
    const result = await carService.updateById(id, carInput);
    expect(result).to.be.deep.equal(carOutPut);
  });
  
  it('testa se é possivel excluir um carro pelo id', async function () {
    const id = '63ec05e33484f70f15bce3b4';
    sinon.stub(Model, 'deleteOne').resolves({ acknowledged: true, deletedCount: 1 });
    const carService = new CarService();
    const result = await carService.excludeById(id);
    expect(result).to.be.deep.equal({ acknowledged: true, deletedCount: 1 });
  });
});