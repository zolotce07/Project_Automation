import baseSettingsPage from './baseSettingsPage';
import Utils from '../helpers/utils';
import { registeredUser } from '../data/userData';

class settingsPassword extends baseSettingsPage {
  get oldPasswordField() {
    return $('[id="oldPassword"]');
  }
  get newPasswordField() {
    return $('[id="newPassword"]');
  }
  get confNewPasswordField() {
    return $('[id="confirmPassword"]');
  }
  get updatePasswordBtn() {
    return $('[class="ant-btn ant-btn-primary"]');
  }

  changePasswordForTest() {
    browser.pause(4000);
    Utils.setValue(this.oldPasswordField, registeredUser.password);
    Utils.setValue(this.newPasswordField, registeredUser.passwordOne);
    Utils.setValue(this.confNewPasswordField, registeredUser.passwordOne);
    browser.pause(3000);
    Utils.click(this.updatePasswordBtn);

  }
  changeForDefaultPassword() {
    Utils.setValue(this.oldPasswordField, registeredUser.passwordOne);
    Utils.setValue(this.newPasswordField, registeredUser.password);
    Utils.setValue(this.confNewPasswordField, registeredUser.password);
    browser.pause(3000);
    Utils.click(this.updatePasswordBtn);
  }
}

export default new settingsPassword();
