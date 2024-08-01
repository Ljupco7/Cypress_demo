class CheckoutPage
{
    fillInCheckoutInfo()
    {
        cy.get('[data-test="checkout"]').click()
        cy.url().should("eq", "https://www.saucedemo.com/checkout-step-one.html")
        cy.get('[data-test="firstName"]').type("Ljupcho")
        cy.get('[data-test="lastName"]').type("Blazheski")
        cy.get('[data-test="postalCode"]').type("1000 Skopje")
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()

    }

    backToInventoryPage()
    {
        cy.get('[data-test="back-to-products"]').click()
    }


}


export default CheckoutPage;