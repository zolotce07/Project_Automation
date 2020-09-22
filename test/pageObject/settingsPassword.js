import baseSettingsPage from './baseSettingsPage';
import Utils from '../helpers/utils';
import { registeredUser } from '../data/userData';

class settingsPassword extends baseSettingsPage {
  get settingsPasswordOldPassword() {
    return $('[id="oldPassword"]');
  }
  get settingsPasswordNewPassword() {
    return $('[id="newPassword"]');
  }
  get settingsPasswordConfNewPassword() {
    return $('[id="confirmPassword"]');
  }
  get updatePasswordBtn() {
    return $('[class="ant-btn ant-btn-primary"]');
  }

  changePasswordForTest() {
    browser.pause(4000);
    Utils.setValue(this.settingsPasswordOldPassword, registeredUser.password);
    Utils.setValue(this.settingsPasswordNewPassword, registeredUser.passwordOne);
    Utils.setValue(this.settingsPasswordConfNewPassword, registeredUser.passwordOne);
    browser.pause(3000);
    Utils.click(this.updatePasswordBtn);

  }
  changeForDefaultPassword() {
    Utils.setValue(this.settingsPasswordOldPassword, registeredUser.passwordOne);
    Utils.setValue(this.settingsPasswordNewPassword, registeredUser.password);
    Utils.setValue(this.settingsPasswordConfNewPassword, registeredUser.password);
    browser.pause(3000);
    Utils.click(this.updatePasswordBtn);
  }
}

export default new settingsPassword();
