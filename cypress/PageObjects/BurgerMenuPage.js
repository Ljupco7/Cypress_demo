class BurgerMenuPage
{
    
    viewAllItems()
    {
        cy.get("#react-burger-menu-btn").click()
        cy.get("#inventory_sidebar_link").click()
        cy.get("#add-to-cart-sauce-labs-backpack")
    }


    logOut()
    {
        cy.get("#react-burger-menu-btn").click()
        cy.get("#logout_sidebar_link").click()
        cy.get("#user-name")
    }



}


export default BurgerMenuPage;