import { expect } from 'chai';
import settingsProfile from '../../pageObject/settingsProfile';
import loginPage from '../../pageObject/loginPage';
import { randomUser, registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';
import profileData from '../../data/settingsProfileData';

describe('USER PROFILE PERSONAL INFO FILLING/UPDATE', () => {
  before('', () => {
    loginPage.open();
    loginPage.login(registeredUser);
    userProfilePage.goToSetting();
  });

  it('', () => {
    settingsProfile.userSettingsProfileInput();
  });

  it('', () => {
    expect(settingsProfile.settingsProfilePhone.getValue()).eq(`${randomUser.phoneNumber}`);
  });

  it('', () => {
    // expect(settingsProfile.settingsProfileAbout.getText()).eq(randomTextAbout);
  });

  it('', () => {
    // expect(settingsProfile.settingsProfileMyGoals.getText()).eq(randomTextGoals);
  });

  it('', () => {
    //expect(settingsProfile.settingsProfileCountry.getText()).eq();
  });

  it('', () => {
    expect(settingsProfile.settingsProfileEnglistLevelC).eq(profileData.languageLevel);

  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userSettingProfile.spec.js
// this.settingsProfilePhone.keys('Backspace'.repeat(5));
