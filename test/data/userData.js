import faker from 'faker';
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

const newUser = {
  firstName,
  lastName,
  email,
  password,
};

const user = {
  email: 'tomsmith@gmail.com',
  password: '123456',
  firstName: 'Tom',
  lastName: 'Smith',
  phone: '',
  about: '',
  goals: '',
  englishLevel: '',
  countryName: ''
};

const Admin = {
  email: 'adminone@gmail.com',
  password: '654321',
  firstName: 'adminFirstName',
  lastName: 'adminLastName',
  phone: '',
  about: '',
  goals: '',
  englishLevel: '',
  countryName: ''
};

export { newUser, Admin, user };
