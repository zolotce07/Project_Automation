import settingsPassword from '../../pageObject/settingsPassword';
import loginPage from '../../pageObject/loginPage';
import { registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';

describe('USER CHANGE PASSWORD FUNCTIONALITY', () => {
  before('should log in as registered user', () => {
    loginPage.open();
    loginPage.login(registeredUser);
    userProfilePage.goToSetting();
    settingsPassword.settingsPasswordBtn.click();
  });
  it('should change old password for new password', () => {
    settingsPassword.changePasswordForTest();
  });

  it('should change new password for old password', () => {
    settingsPassword.changeForDefaultPassword();
  });
});

// wdio wdio.conf.js --spec ./test/specs/e2e/userSettingPassword.spec.js
