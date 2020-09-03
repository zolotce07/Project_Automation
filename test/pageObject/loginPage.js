import BasePage from './BasePage';
import Utils from '../helpers/utils';

class LoginPage extends BasePage {
  get header() {
    return $('h1');
  }
  get emailInput(){
    return $('[id="normal_login_email"]');
  }
  get passwordInput(){
    return $('[id="normal_login_password"]');
  }
  get loginButton(){
    return $('[type="submit"]');
  }

  login(role){
    this.emailInput.setValue(role.email);
    this.passwordInput.setValue(role.password);
    Utils.isClickableBtn(this.loginButton);
  }


  open() {
    super.open('/user/login');
  }
}

export default new LoginPage();