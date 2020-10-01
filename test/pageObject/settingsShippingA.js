import baseSettingsPage from './baseSettingsPage';

class settingsShippingA extends baseSettingsPage {
  get fullNameField() {
    return $('[id="fullName"]');
  }
  get countryField() {
    return $('[class="ant-select-selection-item"]');
  }
  get streetAddressField() {
    return $('[id="address"]');
  }
  get cityField() {
    return $('[id="city"]');
  }
  get stateProvinceField() {
    return $('[id="state"]');
  }
  get postalCodeField() {
    return $('[id="zipCode"]');
  }
  get contactPhoneField() {
    return $('[id="contactPhone"]');
  }
  get saveAddressBtn() {
    return $('[class="ant-btn ant-btn-primary"]');
  }
}

export default new settingsShippingA();
