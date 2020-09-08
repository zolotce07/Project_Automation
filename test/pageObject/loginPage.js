import BasePage from './BasePage';
import Utils from './../helpers/utils';

class LoginPage extends BasePage {
  get header() {
    return $('h1');
  }

  get emailInput() {
    return $('[id="normal_login_email"]');
  }

  get passwordInput() {
    return $('[id="normal_login_password"]');
  }

  get loginBtn() {
    return $('button[type="submit"]');
  }

  open() {
    super.open('/user/login');
  }

  login(role) {
    Utils.setValue(this.emailInput, role.email);
    Utils.setValue(this.passwordInput, role.password);
    Utils.click(this.loginBtn);
  }
}

export default new LoginPage();
