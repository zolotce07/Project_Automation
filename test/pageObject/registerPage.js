import BasePage from './BasePage';
import Utils from '../helpers/utils';
import { randomUser } from '../data/userData';

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
    return $('[class="ant-checkbox"]');
  }

  get registerBtn() {
    return $('button[type="submit"]');
  }

  get skipBtn() {
    return $('//span[text()="Skip"]');
  }

  get headerRegisterLong() {
    return $('h5');
  }

  get openCountryDropDown() {
    return $('.ant-select.ant-select-lg.ant-select-single.ant-select-show-arrow');
  }

  get countryUsa() {
    return $('.ant-select-selection-item'); // <- not sure about USA
  }

  get phoneNumber() {
    return $('#user_login_phone');
  }

  newUserRegister() {
    Utils.setValue(this.firstNameInput, randomUser.firstName);
    Utils.setValue(this.lastNameInput, randomUser.lastName);
    Utils.setValue(this.emailInput, randomUser.email);
    Utils.setValue(this.passwordInput, randomUser.password);
    Utils.click(this.checkBoxTermsAndAgreements);
    Utils.click(this.registerBtn);
    Utils.click(this.skipBtn);
  }

  newUserRegisterLong() {
    Utils.setValue(this.firstNameInput, randomUser.firstName);
    Utils.setValue(this.lastNameInput, randomUser.lastName);
    Utils.setValue(this.emailInput, randomUser.email);
    Utils.setValue(this.passwordInput, randomUser.password);
    Utils.click(this.checkBoxTermsAndAgreements);
    Utils.click(this.registerBtn);
    Utils.click(this.openCountryDropDown);
    Utils.click(this.countryUsa);
    Utils.setValue(this.phoneNumber, randomUser.phoneNumber);
    Utils.click(this.registerBtn);
  }

  open() {
    super.open('/user/register');
  }
}

export default new RegisterPage();
