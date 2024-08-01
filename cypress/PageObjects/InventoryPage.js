class InventoryPage
{
    constructor() 
    {
        this.randomNumber = 0
    }
      
    getRandomNumber()
    {
        // Get random number to enable viewing/adding/removing random items
        return Math.floor(Math.random() * 6);
    }

    verifyInventoryItemNumber(input)
    {
        // Count inventory items with certain class to conclude how many are there (available)
        cy.get("[data-test='inventory-item-name']").should('have.length', input)
    }          

    viewItem()
    {
        // View single item listed from the Inventory page
        cy.get(`#item_${this.getRandomNumber()}_title_link > div:nth-child(1)`).click()
        cy.get("[data-test='inventory-container']")
        cy.get("[data-test='back-to-products']").click()
        cy.get("[data-test='shopping-cart-link']")
    }

    addItemToCart()
    {
        cy.get("[data-test='add-to-cart-sauce-labs-fleece-jacket']").click() 
        cy.get("[data-test='shopping-cart-link']").click()
    }

    removeItemFromInventory()
    {
        cy.get("[data-test='remove-sauce-labs-fleece-jacket']").click()
    }    

    visitCart()
    {
        // Open the Cart page and verify it's opened
        cy.get("[data-test='shopping-cart-link']").click()
        cy.get("[data-test='item-5-title-link']")
    }


}

export default InventoryPage;