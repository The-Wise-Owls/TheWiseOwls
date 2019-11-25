describe('The Wise Owls - Splash Page', function () {
  it('Should render The Wise Owls splash page', function () {
    cy.visit('/')
    cy.get('#splashHeader').should('exist')
  })

  it('Should navigate to login page on click', function () {
    cy.visit('/')
    cy.get('#testLoginButton').click()
    cy.url().should('match', /login/)
  })

  it('should navigate to request page on click', function () {
    cy.visit('/')
    cy.get('#testRequestButton').click()
    cy.url().should('match', /request/)
  })
})