class settingsPasswordPage {
  get settingsPasswordBtn(){
    return $('[data-qa="password"]');
  }
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