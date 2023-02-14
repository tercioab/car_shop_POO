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
});