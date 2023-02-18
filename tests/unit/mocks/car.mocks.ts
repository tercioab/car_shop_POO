import CarDomain from '../../../src/Domains/Car';

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

export default { carInput, carOutPut };