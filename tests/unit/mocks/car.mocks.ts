import CarDomain from '../../../src/Domains/Car.domains';

const Input = {
  model: 'rari',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
}; 

const OutPut: CarDomain = new CarDomain({
  id: '63ec05e33484f70f15bce3b4',
  model: 'rari',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
});

export default { Input, OutPut };