class LogOut_PO{
    logout(){
        cy.wait(10000)
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.contains("Logout").click()
    }
}
export default LogOut_PO;