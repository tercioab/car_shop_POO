import MotorcycleDomain from '../../../src/Domains/entities/Motorcycle';

const Input = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Custom',
  engineCapacity: 600,
};

const OutPut: MotorcycleDomain = new MotorcycleDomain({
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Custom',
  engineCapacity: 600,
});

export default { Input, OutPut };