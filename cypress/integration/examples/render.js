describe('The Wise Owls', function () {
  it('Should render The Wise Owls splash page', function() {
    cy.visit('/');
  })

  it('should navigate to template page on click', function() {
    cy.get('#testButton').click()
    cy.url().should('match', /template/)
  })

  it('should reload the /template page and still have content served', function() {
    cy.reload()
    cy.url().should('match', /template/)
    cy.get('#templateTest').should('contain', 'Should Route to this page')
  } )

})