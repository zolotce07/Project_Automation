import BasePage from './BasePage';
import { newUser } from '../data/userData';
import Utils from '../helpers/utils';

class RegisterPage extends BasePage {
  get header() {
    return $('h1');
  }
  get firstNameInput() {
    return $('[id="user_login_firstName"]');
  }
  get lastNameInput() {
    return $('[id="user_login_lastName"]');
  }
  get emailInput() {
    return $('[id="user_login_email"]');
  }
  get passwordInput() {
    return $('[id="user_login_password"]');
  }
  get checkBoxTermsAndAgreements() {
    return $('[class="ant-checkbox-input"]');
  }
  get registerButton() {
    return $('[type="submit"]');
  }
  get skipButton() {
    return browser.$('//span[text()="Skip"]');
  }

  newUserRegister() {
    Utils.setValue(this.firstNameInput, newUser.firstName);
    Utils.setValue(this.lastNameInput, newUser.lastName);
    Utils.setValue(this.emailInput, newUser.email);
    Utils.setValue(this.passwordInput, newUser.password);
    this.checkBoxTermsAndAgreements.click();
    this.registerButton.click();
    this.skipButton.click();
  }

  open() {
    super.open('/user/register');
  }
}

export default new RegisterPage();
