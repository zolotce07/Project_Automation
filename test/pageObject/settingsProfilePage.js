class SettingsProfilePage {
  get settingsProfileBtn() {
    return $('[data-qa="profileTab"]');
  }
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
    return $('[class="ant-select-selection-item"]')[0];
  }
  get settingsProfileEnglishLevel() {
    return $('[class="ant-select-selection-item"]')[1];
  }
  get settingsProfileTshirtSize() {
    return $('[class="ant-select-selection-item"]')[2];
  }
  get settingsProfileSubmitBtn() {
    return $('[type="submit"]');
  }
}
