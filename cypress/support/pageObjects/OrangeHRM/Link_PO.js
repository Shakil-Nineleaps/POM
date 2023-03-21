class Link_PO{
    link_click(links){
        cy.wait(10000)
        cy.contains(links).click()
    }
}
export default Link_PO;