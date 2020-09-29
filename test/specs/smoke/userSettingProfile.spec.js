import { expect } from 'chai';
import settingsProfile from '../../pageObject/settingsProfile';
import loginPage from '../../pageObject/loginPage';
import { randomUser, registeredUser } from '../../data/userData';
import userProfilePage from '../../pageObject/userProfilePage';
import profileData from '../../data/settingsProfileData';
import Utils from '../../helpers/utils';
import dailyReportData from '../../data/dailyReportData';

let aboutText = Utils.randomTextElement(dailyReportData.charSet);
let myGoalsText = Utils.randomTextElement(dailyReportData.charSet);
let phoneNumber = randomUser.phoneNumber;
let country;

describe('USER PROFILE PERSONAL INFO FILLING/UPDATE', () => {
  before('', () => {
    loginPage.open();
    loginPage.login(registeredUser);
    userProfilePage.goToSetting();
  });

  it('', () => {
    settingsProfile.userSettingsProfileInput(aboutText, myGoalsText, phoneNumber, country);
  });

  it('', () => {
    expect(settingsProfile.settingsProfilePhone.getValue()).eq(phoneNumber.toString());
  });

  it('', () => {
    expect(settingsProfile.settingsProfileAbout.getText()).eq(aboutText);
  });

  it('', () => {
    expect(settingsProfile.settingsProfileMyGoals.getText()).eq(myGoalsText);
  });

  // it('', () => {
  //   console.log(settingsProfile.settingsProfileCountry.getText());
  //   expect(settingsProfile.settingsProfileCountry.getText()).eq();
  // });

  const englishLevelArr = [
    'Zero',
    'Beginner',
    'Elementary',
    'Pre-Intermediate',
    'Intermediate',
    'Upper intermediate',
    'Advanced',
    'Proficient',
    'Native',
  ];

  it('', () => {
    expect(settingsProfile.settingsProfileEnglishLevel.getText()).eq(englishLevelArr[4]);
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userSettingProfile.spec.js
// this.settingsProfilePhone.keys('Backspace'.repeat(5));
