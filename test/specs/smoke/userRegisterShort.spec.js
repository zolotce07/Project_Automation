import { expect } from 'chai';
import RegisterPage from '../../pageObject/registerPage';
import UserProfilePage from './../../pageObject/userProfilePage';
import Utils from '../../helpers/utils';
import { randomUser } from './../../data/userData';
import { userLoginApi, userDeleteApi } from '../../api/apiFunctions';

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
    const randomUserLogin = await userLoginApi(randomUser);
    console.log('USER: ' + Object.entries(randomUserLogin));
    expect(randomUserLogin.data.user.name).eq(randomUser.firstName + ' ' + randomUser.lastName);
  });

  it('should random user delete', async () => {
    const randomUserDelete = await userDeleteApi(randomUser);
    expect(randomUserDelete.status).eq(200);
    expect(randomUserDelete.data.message).eq('User deleted');
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userRegisterShort.spec.js
