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

let country = describe('USER PROFILE PERSONAL INFO FILLING/UPDATE FUNCTIONALITY', () => {
  before(() => {
    loginPage.open();
    loginPage.login(registeredUser);
    userProfilePage.goToSetting();
  });

  it('should be able to insert personal information as user', () => {
    settingsProfile.userSettingsProfileInput(aboutText, myGoalsText, phoneNumber, country);
  });

  it('should check if the phone number in phoneField saved without discrepancies between inserted and saved result', () => {
    expect(settingsProfile.phoneField.getValue()).eq(phoneNumber.toString());
  });

  it('should check if saved text in aboutField have discrepancies between inserted and saved result', () => {
    expect(settingsProfile.aboutField.getText()).eq(aboutText);
  });

  it('should check if saved text in myGoalsField have discrepancies between inserted and saved result', () => {
    expect(settingsProfile.myGoalsField.getText()).eq(myGoalsText);
  });

  it('should check if chosen county from the given list in the profile was saved correctly', () => {
    expect(settingsProfile.countryField.getText()).eq(settingsProfileData.profileTestData.country);
  });

  it('should check if chosen english level from the given list in the profile was saved correctly', () => {
    expect(settingsProfile.englishLevelField.getText()).eq(settingsProfileData.englishLevelArr[4]);
  });

  it('should check if chosen T-shirt size from the given list in the profile was saved correctly', () => {
    expect(settingsProfile.tShirtSizeField.getText()).eq(
      settingsProfileData.profileTestData.tSizeShirt,
    );
  });
});

// wdio wdio.conf.js --spec ./test/specs/e2e/userSettingProfile.spec.js
// this.settingsProfilePhone.keys('Backspace'.repeat(5));
