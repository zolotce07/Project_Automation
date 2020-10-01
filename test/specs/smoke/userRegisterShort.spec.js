import { expect } from 'chai';
import RegisterPage from '../../pageObject/registerPage';
import UserProfilePage from './../../pageObject/userProfilePage';
import Utils from '../../helpers/utils';
import { randomUser } from './../../data/userData';
const axios = require('axios');

describe('USER REGISTER SHORT', () => {
  before('Open Register Page', () => {
    RegisterPage.open();
    expect(browser.getUrl()).includes('/user/register');
  });

  it('should register user/shortCut', () => {
    RegisterPage.newUserRegister();
    expect(Utils.getText(UserProfilePage.accountHolderName)).eq(
      `${randomUser.firstName} ${randomUser.lastName}`,
    );
  });

  it('should check if user registered by login it', async () => {
    const rmUser = await axios({
      method: 'post',
      url: 'https://server-stage.pasv.us/user/login',
      data: {
        email: randomUser.email,
        password: randomUser.password,
      },
    })
      .then(res => res)
      .then(err => err);
    expect(rmUser.data.user.name).eq(randomUser.firstName + ' ' + randomUser.lastName);
  });

  it('should random user delete', async () => {
    const randomUserDelete = await axios({
      method: 'delete',
      url: `https://server-stage.pasv.us/user/email/${randomUser.email}`,
      headers: {
        Authorization: process.env.TOKEN_ADMIN,
      },
    })
      .then(res => res)
      .catch(err => err);
    expect(randomUserDelete.status).eq(200);
    expect(randomUserDelete.data.message).eq('User deleted');
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userRegisterShort.spec.js
