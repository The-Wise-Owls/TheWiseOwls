describe('The Wise Owls - Availability', function () {
  it('Should navigate to previous page when back arrow is clicked', function () {
    cy.visit('/adminSplash')
    cy.visit('/availability')
    cy.get('#testBackAvailability').click()
    cy.url().should('match', /adminSplash/)
  })
})