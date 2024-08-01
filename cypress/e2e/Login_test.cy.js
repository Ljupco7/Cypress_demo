import LoginPage from "../PageObjects/LoginPage";
import BurgerMenuPage from "../PageObjects/BurgerMenuPage";


// Initialize new page classes
const login_page = new LoginPage();
const burger_menu = new BurgerMenuPage();

describe('Login Page Test Suite', () => {

    it("Negative Login Test scenario", () => {
        login_page.visitUrl()
        login_page.setUserName("locked_out_user")
        login_page.setPassword("secret_sauce")
        login_page.clickSubmit()

        cy.get(".error-message-container h3")
    })

    it('Positive Login test scenario', () => {
        login_page.clearField(login_page.usernameId)
        login_page.clearField(login_page.passwordId)
        login_page.setUserName("standard_user")
        login_page.setPassword("secret_sauce")
        login_page.clickSubmit()
        login_page.verifyLogin()

    })

    it("Logout from the application", () => {
        burger_menu.logOut()
        login_page.verifyLogout()

    })



})