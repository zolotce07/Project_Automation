import { expect } from 'chai';
import registerPage from '../../pageObject/registerPage';
import shopPage from '../../pageObject/shopPage';
import utils from '../../helpers/utils';
import { canfirmDetails } from '../../data/shopData';

describe('USER PRODUCT PURCHASE FUNCTIONALITY', () => {
  before(() => {
    registerPage.open();
    registerPage.newUserRegister();
    shopPage.shopBtn.click();
  });

  it('should be able to commit the purchase as a user', () => {
    shopPage.coursePayment();
  });

  it('should check if purchase was commit ', () => {
    utils.verifyText(shopPage.header, canfirmDetails.purchaseConfirm);
    expect(shopPage.header.getText()).eq(canfirmDetails.purchaseConfirm);
  });
});

// wdio wdio.conf.js --spec ./test/specs/e2e/userShopPurchase.spec.js
