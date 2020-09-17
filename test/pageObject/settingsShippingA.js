import baseSettingsPage from './baseSettingsPage';

class settingsShippingA extends baseSettingsPage {
  get settingsFullName() {
    return $('[id="fullName"]');
  }
  get settingsCountry() {
    return $('[class="ant-select-selection-item"]');
  }
  get settingsStreetAddress() {
    return $('[id="address"]');
  }
  get settingsCity() {
    return $('[id="city"]');
  }
  get settingsStateProvince() {
    return $('[id="state"]');
  }
  get settingsPostalCode() {
    return $('[id="zipCode"]');
  }
  get settingsContactPhone() {
    return $('[id="contactPhone"]');
  }
}

export default new settingsShippingA();
