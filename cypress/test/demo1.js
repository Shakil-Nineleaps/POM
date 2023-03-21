import HomePage_PO from "../support/pageObjects/OrangeHRM/homepage_PO";
import Link_PO from "../support/pageObjects/OrangeHRM/Link_PO";
import LogOut_PO from "../support/pageObjects/OrangeHRM/Logout_PO";
describe('', () => {
    const homepage_po= new HomePage_PO();
    const link_po= new Link_PO();
    const logut_po= new LogOut_PO();
    // it('', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.get('input[name="username"]').type("Admin")
        // cy.get('input[name="password"]').type("admin123")
        // cy.get('button[type="submit"]').click()
    //     cy.contains("Admin").click()
        // cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        // cy.contains("Logout").click()
    // });
    beforeEach(function() {
       
        homepage_po.visitHomePage();
        homepage_po.Login()
    });
   it('', () => {
    // cy.SelectName('Admin');
    link_po.link_click("Admin");
    logut_po.logout();
   });
});