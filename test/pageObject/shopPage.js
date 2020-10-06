import BasePage from './BasePage';
import utils from '../helpers/utils';
import { cardPaymentDetails } from '../data/shopData';
import { randomUser } from '../data/userData';

class shopPage extends BasePage {
  get header() {
    return $('h1');
  }
  get shopBtn() {
    return $('[href="/shop"]');
  }
  get buyNowBtn() {
    return $$('.ant-btn.ant-btn-primary.mb-1rem');
  }
  get googlePayBtn() {
    return $('.GooglePayButton.GooglePayButton--dark');
  }
  get emailField() {
    return $('#email');
  }
  get cardNumberField() {
    return $('#cardNumber');
  }
  get iDCardExpireField() {
    return $('#cardExpiry');
  }
  get cardCvcField() {
    return $('#cardCvc');
  }
  get billingNameField() {
    return $('#billingName');
  }
  get billingCountryField() {
    return $('#billingCountry');
  }
  get billingCountryListSomali() {
    return $('[value="SO"]');
  }
  get paymentSubmitBtn() {
    return $('.SubmitButton');
  }
  get purchasedIcon() {
    return $('.ant-tag.ant-tag-green');
  }

  coursePayment() {
    utils.click(this.buyNowBtn[2]);
    utils.setValue(this.emailField, randomUser.email);
    utils.setValue(this.cardNumberField, cardPaymentDetails.cardNumber);
    utils.setValue(this.iDCardExpireField, cardPaymentDetails.cardExpirationData);
    utils.setValue(this.cardCvcField, cardPaymentDetails.cardCVV);
    utils.setValue(this.billingNameField, randomUser.firstName + ' ' + randomUser.lastName);
    utils.click(this.billingCountryField);
    utils.click(this.billingCountryListSomali);
    utils.click(this.paymentSubmitBtn);
  }
}

export default new shopPage();
