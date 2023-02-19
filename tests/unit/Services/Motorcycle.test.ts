import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotocicleService from '../../../src/Services/motorcycle.Service';
import motorcycleMocks from '../mocks/motorcycle.mocks';

describe('teste motorcycle service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('01. testa se é possivel inserir uma nova moto', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleMocks.OutPut);
    const result = await new MotocicleService().create(motorcycleMocks.Input);
    expect(result).to.be.deep.equal(motorcycleMocks.OutPut);
  });

  it('02. testa se é possivel retornar todas as motos', async function () {
    sinon.stub(Model, 'find').resolves([motorcycleMocks.OutPut]);
    const result = await new MotocicleService().findAll();
    expect(result).to.be.deep.equal([motorcycleMocks.OutPut]);
  });

  it('03. testa se é possivel retornar o motos pelo id', async function () {
    const id = '6348513f34c397abcad040b2'; 
    sinon.stub(Model, 'findById').resolves(motorcycleMocks.OutPut);
    const result = await new MotocicleService().findById(id);
    expect(result).to.be.deep.equal(motorcycleMocks.OutPut);
  });

  it('04. testa se é possivel atualizar um motos pelo id', async function () {
    const id = '6348513f34c397abcad040b2';
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleMocks.OutPut);
    const result = await new MotocicleService().updateById(id, motorcycleMocks.Input);
    expect(result).to.be.deep.equal(motorcycleMocks.OutPut);
  });
  
  it('05. testa se é possivel excluir um motos pelo id', async function () {
    const id = '6348513f34c397abcad040b2';
    sinon.stub(Model, 'deleteOne').resolves({ acknowledged: true, deletedCount: 1 });
    const result = await new MotocicleService().excludeById(id);
    expect(result).to.be.deep.equal({ acknowledged: true, deletedCount: 1 });
  });
});