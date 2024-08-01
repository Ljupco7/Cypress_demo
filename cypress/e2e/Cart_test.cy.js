import LoginPage from "../PageObjects/LoginPage";
import CartPage from "../PageObjects/CartPage";
import InventoryPage from "../PageObjects/InventoryPage";

const inventory_page = new InventoryPage();
const login_page = new LoginPage();
const cart_page = new CartPage();


describe('Cart Page Test suite', () => {
    before(() => {
        login_page.visitUrl()
        login_page.setUserName("standard_user")
        login_page.setPassword("secret_sauce")
        login_page.clickSubmit()
        login_page.verifyLogin()
    });

    it("Remove item from the Cart Page", () => {
        inventory_page.addItemToCart()
        inventory_page.visitCart()
        cart_page.removeItemFromCart()
        cart_page.continueShopping()
        inventory_page.verifyInventoryItemNumber(6)
    });



});