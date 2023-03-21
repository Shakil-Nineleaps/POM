class HomePage_PO{
    visitHomePage(){
        cy.visit(Cypress.env("OrangeHRM_HomePage"));
        cy.wait(10000);
    }
    Login(){
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
    }
};
export default HomePage_PO;