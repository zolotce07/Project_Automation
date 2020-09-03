import BasePage from './BasePage';
import { newUser } from '../data/userData';

class RegisterPageStep1 extends BasePage {
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
    this.firstNameInput.setValue(newUser.firstName);
    this.lastNameInput.setValue(newUser.lastName);
    this.emailInput.setValue(newUser.email);
    this.passwordInput.setValue(newUser.password);
    this.checkBoxTermsAndAgreements.click();
    this.registerButton.click();
    this.skipButton.click();
  }

  open() {
    super.open('/user/register');
  }
}

export default new RegisterPageStep1();
