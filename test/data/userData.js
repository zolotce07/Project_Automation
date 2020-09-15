import faker from 'faker';

const randomUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phoneNumber: faker.random.number(33344455666)
};
// faker.phone.phoneNumberFormat(0)
// faker.phone.phoneNumber()

const registeredUser = {
  email: 'tomsmith@gmail.com',
  password: '123456',
  firstName: 'Tom',
  lastName: 'Smith',
  phone: '3472642299',
  about: '',
  goals: '',
  englishLevel: '',
  countryName: '',
};

const admin = {
  email: 'adminone@gmail.com',
  password: '654321',
  firstName: 'adminFirstName',
  lastName: 'adminLastName',
  phone: '3472642299',
  about: '',
  goals: '',
  englishLevel: '',
  countryName: '',
};

export { randomUser, admin, registeredUser };
