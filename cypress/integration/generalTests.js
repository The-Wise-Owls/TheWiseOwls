describe('The Wise Owls - General Tests', function () {
  it('Should reload the request page and still have content served', function () {
    cy.visit('/request')
    cy.reload()
    cy.url().should('match', /request/)
    cy.get('#requestTest').should('exist')
  })
})