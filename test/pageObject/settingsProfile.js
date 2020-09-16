import baseSettingsPage from './baseSettingsPage';

class SettingsProfile extends baseSettingsPage {
  get settingsProfileFirstName() {
    return $('[id="editProfile_firstName"]');
  }
  get settingsProfileLastName() {
    return $('[id="editProfile_lastName"]');
  }
  get settingsProfilePhone() {
    return $('[id="editProfile_phone"]');
  }
  get settingsProfileAbout() {
    return $('[id="editProfile_about"]');
  }
  get settingsProfileMyGoals() {
    return $('[id="editProfile_goals"]');
  }
  get settingsProfileCountry() {
    return $('[data-qa="countries"]');
  }
  get settingsProfileEnglishLevel() {
    return $('[data-qa="englishLevel"]');
  }
  get settingsProfileTshirtSize() {
    return $('[data-qa="tShirtSize"]');
  }
  get settingsProfileSubmitBtn() {
    return $('[type="submit"]');
  }
}
export default new SettingsProfile();
