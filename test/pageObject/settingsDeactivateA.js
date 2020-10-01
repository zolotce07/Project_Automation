import baseSettingsPage from './baseSettingsPage';
import utils from '../helpers/utils';


class settingsDeactivateA extends baseSettingsPage {
  get accountDeactivationHeader() {
    return $('h2');
  }
  get deactivateBtn() {
    return $('[data-qa="deactivateBtn"]');
  }
  get alertMessageOkBtn() {
    return $('[class="ant-btn ant-btn-dangerous"]');
  }

  deactivateAccount() {
    utils.click(this.settingsDeactivateAccount);
    utils.click(this.deactivateBtn);
    utils.click(this.alertMessageOkBtn);
  }
}

export default new settingsDeactivateA();
