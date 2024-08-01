import LoginPage from "../PageObjects/LoginPage";
import InventoryPage from "../PageObjects/InventoryPage";
import CheckoutPage from "../PageObjects/CheckoutPage"


const inventory_page = new InventoryPage();
const login_page = new LoginPage();
const checkout_page = new CheckoutPage();

describe('Inventory Page Test suite', () => {
    before(() => {
        // Implemented hook to login everytime before tests are executed
        login_page.visitUrl()
        login_page.setUserName("standard_user")
        login_page.setPassword("secret_sauce")
        login_page.clickSubmit()
        login_page.verifyLogin()
    });


    it("Checkout or purchase added item", () => {
        // Add item to Cart and then finish the checkout process
        inventory_page.addItemToCart()
        inventory_page.visitCart()
        checkout_page.fillInCheckoutInfo()
        checkout_page.backToInventoryPage()
        inventory_page.verifyInventoryItemNumber(6)
    });



});

