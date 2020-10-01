import { expect } from 'chai';
import RegisterPage from '../../pageObject/registerPage';
import UserProfilePage from './../../pageObject/userProfilePage';
import Utils from '../../helpers/utils';
import { admin, randomUser } from './../../data/userData';
import userDataAPI from '../../helpers/hooks';
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

  it('should user be registered ', async () => {
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
    expect(rmUser.data.user.name).eq(randomUser.firstName +' '+ randomUser.lastName);
  });

  it('should return admin token', async () => {
    const dataAPIAdmin = await userDataAPI(admin);
    process.env.TOKEN_ADMIN = dataAPIAdmin.data.token;
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
    console.log('RESULT ' + randomUserDelete);
    //expect(dailyReportDelete.data.message).eq('Diary deleted');
    expect(randomUserDelete.status).eq(200);
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userRegisterShort.spec.js
