class CartPage
{
continueShopping()
    {
        // Click the Continue shopping button to go back to the Inventory page
        cy.get("[data-test='continue-shopping']").click()

    }

    removeItemFromCart()
    {
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()

    }


}


export default CartPage;