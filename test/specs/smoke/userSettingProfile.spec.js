import settingsProfile from '../../pageObject/settingsProfile';
import loginPage from '../../pageObject/loginPage';
import { registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';

describe('USER PROFILE PERSONAL INFO FILLING/UPDATE', () => {
  before('', () => {
    loginPage.open();
    loginPage.login(registeredUser);
    userProfilePage.goToSetting();
  });
  it('', () => {
    settingsProfile.userSettingsProfileInput();
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userSettingProfile.spec.js
// this.settingsProfilePhone.keys('Backspace'.repeat(5));
