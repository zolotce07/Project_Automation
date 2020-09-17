import baseSettingsPage from './baseSettingsPage';

class settingsDeactivateA extends baseSettingsPage {
  get accountDeactivationHeader() {
    return $('h2');
  }
  get accountDeactivateBtn() {
    return $('[data-qa="deactivateBtn"]');
  }
}

export default new settingsDeactivateA();
