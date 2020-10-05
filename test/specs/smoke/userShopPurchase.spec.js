import registerPage from '../../pageObject/registerPage';
import shopPage from '../../pageObject/shopPage';

describe('USER ABILITY TO MAKE PRODUCT PURCHASE', () => {
  before(() => {
    registerPage.open();
    registerPage.newUserRegister();
    shopPage.shopBtn.click();
    browser.pause(3000);
  });
  it('should ', () => {
    shopPage.coursePayment();
  });
});

// wdio wdio.conf.js --spec ./test/specs/smoke/userShopPurchase.spec.js