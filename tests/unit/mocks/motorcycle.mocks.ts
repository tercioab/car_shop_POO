import MotorcycleDomain from '../../../src/Domains/Motorcycle';

const MotorcycleInput = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Custom',
  engineCapacity: 600,
};

const MotorcycleOutPut: MotorcycleDomain = new MotorcycleDomain({
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Custom',
  engineCapacity: 600,
});

export default { MotorcycleInput, MotorcycleOutPut };