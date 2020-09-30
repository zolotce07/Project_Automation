import baseSettingsPage from './baseSettingsPage';
import Utils from '../helpers/utils';

class SettingsProfile extends baseSettingsPage {

  get phoneField() {
    return $('[id="editProfile_phone"]');
  }
  get aboutField() {
    return $('[id="editProfile_about"]');
  }
  get myGoalsField() {
    return $('[id="editProfile_goals"]');
  }
  get countryField() {
    return $('[data-qa="countries"]');
  }
  get countryDropDown() {
    return $$('//div[@id="editProfile_countryName_list"]/following-sibling::div//div[contains(@class, "ant-select-item ant-select-item-option")]');
  }

  get englishLevelField() {
    return $('[data-qa="englishLevel"]');
  }

  get englishLevelDropDown() {
    return $$('//div[@id="editProfile_englishLevel_list"]/following-sibling::div//div[contains(@class, "ant-select-item ant-select-item-option")]');
  }

  get tShirtSizeField() {
    return $('[data-qa="tShirtSize"]');
  }

  get menUnisexMdropDowm() {
    return $('//div[@class="ant-select-item-option-content"][contains(text(),"Men/Unisex - M")]');
  }

  get saveBtn() {
    return $('[type="submit"]');
  }

  userSettingsProfileInput(aboutText, myGoalsText, phoneNumber) {
    Utils.fieldEmptyfier(this.phoneField);
    Utils.setValue(this.phoneField, phoneNumber);
    Utils.setValue(this.aboutField, aboutText);
    Utils.setValue(this.myGoalsField, myGoalsText);
    Utils.click(this.countryField);
    this.countryDropDown[1].scrollIntoView();
    Utils.click(this.countryDropDown[1]);
    Utils.click(this.englishLevelField);
    this.englishLevelDropDown[4].scrollIntoView();
    Utils.click(this.englishLevelDropDown[4]);
    Utils.click(this.tShirtSizeField);
    Utils.click(this.menUnisexMdropDowm);
    Utils.click(this.saveBtn);
  }
}

export default new SettingsProfile();
