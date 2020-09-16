import baseSettingsPage from './baseSettingsPage';


class settingsPassword extends baseSettingsPage{
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
}

export default new settingsPassword();