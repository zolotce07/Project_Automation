import BasePage from './BasePage';


class ProfilePage extends BasePage {
  get url(){
    return
  }
  get header() {
    return $('h1');
  }

  open(path) {
    super.open('/');
  }
}