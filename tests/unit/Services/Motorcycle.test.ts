import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotocicleService from '../../../src/Services/MotocicleService';
import motorcycleMocks from '../mocks/motorcycle.mocks';

describe('teste motorcycle service', function () {
  it('testa se é possivel inserir uma nova moto', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleMocks.MotorcycleOutPut);
    const motorcycleService = new MotocicleService();
    const result = await motorcycleService.create(motorcycleMocks.MotorcycleInput);
    expect(result).to.be.deep.equal(motorcycleMocks.MotorcycleOutPut);
  });
});