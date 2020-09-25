import baseSettingsPage from './baseSettingsPage';
import utils from '../helpers/utils';


class settingsDeactivateA extends baseSettingsPage {
  get accountDeactivationHeader() {
    return $('h2');
  }
  get accountDeactivateBtn() {
    return $('[data-qa="deactivateBtn"]');
  }
  get alertMessageOkBtn() {
    return $('[class="ant-btn ant-btn-dangerous"]');
  }
  deactivateAccount() {
    utils.click(this.settingsDeactivateAccount);
    utils.click(this.accountDeactivateBtn);
    utils.click(this.alertMessageOkBtn);
  }
}

export default new settingsDeactivateA();
