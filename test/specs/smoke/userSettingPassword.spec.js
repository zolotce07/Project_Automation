import settingsPassword from '../../pageObject/settingsPassword';
import loginPage from '../../pageObject/loginPage';
import { registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';

describe('', () => {
  before('', () => {
    loginPage.open();
    loginPage.login(registeredUser);
    userProfilePage.goToSetting();
    settingsPassword.settingsPasswordBtn.click();
  });
  it('', () => {
    settingsPassword.changePasswordForTest();
  });

  it('', () => {
    settingsPassword.changeForDefaultPassword();
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userSettingPassword.spec.js
