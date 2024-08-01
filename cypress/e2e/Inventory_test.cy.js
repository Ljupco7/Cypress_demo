import LoginPage from "../PageObjects/LoginPage";
import InventoryPage from "../PageObjects/InventoryPage";
import CartPage from "../PageObjects/CartPage";


const inventory_page = new InventoryPage();
const login_page = new LoginPage();
const cart_page = new CartPage();

describe('Inventory Page Test suite', () => {
    before(() => {
        // Implemented hook to login everytime before tests are executed
        login_page.visitUrl()
        login_page.setUserName("standard_user")
        login_page.setPassword("secret_sauce")
        login_page.clickSubmit()
        login_page.verifyLogin()
    });

    
    it("View item from the inventory", () => {
        inventory_page.viewItem()
        inventory_page.verifyInventoryItemNumber(6)
    });


    it("Add item to the Cart", () => {
        inventory_page.addItemToCart()
        inventory_page.visitCart()

    });


    it("Remove previously added item from the Inventory page", () => {
        cart_page.continueShopping()
        inventory_page.removeItemFromInventory()
        inventory_page.verifyInventoryItemNumber(6)
    });


});