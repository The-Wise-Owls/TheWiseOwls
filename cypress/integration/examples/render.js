describe('The Wise Owls', function () {
  it('Should render The Wise Owls splash page', function() {
    cy.visit('/');
  })

  it('Should navigate to login page on click', function () {
    cy.get('#loginButton').click()
    cy.url().should('match', /login/)
  })

  it('should navigate to request page on click', function() {
    cy.visit('/');
    cy.get('#requestButton').click()
    cy.url().should('match', /request/)
  })

  it('should reload the request page and still have content served', function() {
    cy.reload()
    cy.url().should('match', /request/)
    cy.get('#requestTest').should('contain', 'Request Office Hours')
  } )

})