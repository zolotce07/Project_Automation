import { expect } from 'chai';
import settingsProfile from '../../pageObject/settingsProfile';
import loginPage from '../../pageObject/loginPage';
import { randomUser, registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';
import settingsProfileData from '../../data/settingsProfileData';
import Utils from '../../helpers/utils';
import dailyReportData from '../../data/dailyReportData';

let aboutText = Utils.randomTextElement(dailyReportData.charSet);
let myGoalsText = Utils.randomTextElement(dailyReportData.charSet);
let phoneNumber = randomUser.phoneNumber;

let country = describe('USER PROFILE PERSONAL INFO FILLING/UPDATE', () => {
  before('', () => {
    loginPage.open();
    loginPage.login(registeredUser);
    userProfilePage.goToSetting();
  });

  it('', () => {
    settingsProfile.userSettingsProfileInput(aboutText, myGoalsText, phoneNumber, country);
  });

  it('', () => {
    expect(settingsProfile.phoneField.getValue()).eq(phoneNumber.toString());
  });

  it('', () => {
    expect(settingsProfile.aboutField.getText()).eq(aboutText);
  });

  it('', () => {
    expect(settingsProfile.myGoalsField.getText()).eq(myGoalsText);
  });

  it('', () => {
    expect(settingsProfile.countryField.getText()).eq(settingsProfileData.profileTestData.country);
  });

  it('', () => {
    expect(settingsProfile.englishLevelField.getText()).eq(settingsProfileData.englishLevelArr[4]);
  });

  it('', () => {
    expect(settingsProfile.tShirtSizeField.getText()).eq(settingsProfileData.profileTestData.tSizeShirt);
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userSettingProfile.spec.js
// this.settingsProfilePhone.keys('Backspace'.repeat(5));
