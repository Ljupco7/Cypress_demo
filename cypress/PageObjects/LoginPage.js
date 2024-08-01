class LoginPage{

    constructor()
    {
        // Save locators to reference the properties later
        this.usernameId = "[data-test='username']"
        this.passwordId = "[data-test='password']"
    }
    

    visitUrl()
    {
        cy.visit("https://www.saucedemo.com/")
    }

    setUserName(username)
    {
        cy.get(this.usernameId).type(username)
    }

    setPassword(password)
    {
        cy.get(this.passwordId).type(password)
    }


    clearField(fieldId)
    {
        cy.get(fieldId).clear()
    }


    clickSubmit()
    {
        cy.get('[data-test="login-button"]').click();
    }


    verifyLogin()
    {
        //Verify login is successful
        cy.get("[data-test='shopping-cart-link']")
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    }

    verifyLogout()
    {
        //Verify logout is successful
        cy.get('[data-test="login-button"]')
    }

}

export default LoginPage;