describe('Navbar Test', () => {
    it('Visits FAQ', () => {
      cy.visit('http://localhost:3003/')
      cy.contains('FAQ')
      cy.contains('Home').click()


      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/localhost:3003/Home/login')

      // Get an input, type into it and verify that the value has been updated
      cy.get('.Email*')
        .type('willitend@gmail.com')
        .should('have.value', 'willitend@gmail.com')

      
    })
  })
  