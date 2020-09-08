class BaseProfilePage {
    get dailyReports() {
        return $('//h3[@data-qa="dailyReports"]');
    }
    get profileDropdownMenu() {
        return $('//div[@class="ml-auto"]//a[@class="ant-dropdown-link ant-dropdown-trigger"]');
    }
    get logoutButton() {
        return $('//li[@data-qa="logout"]');
    }

    logout() {
        this.profileDropdownMenu.click()
        this.logoutButton.click()
    }
    userNameText() {
       return this.profileDropdownMenu.getText()
    }
}
export default BaseProfilePage;
