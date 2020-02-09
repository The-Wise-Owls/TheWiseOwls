describe('The Wise Owls - Login', function () {
  it('Should navigate from Login page to AdminSplash page on click', function () {
    cy.visit('/login')
    cy.get('#testLoginButton2').click()
    cy.url().should('match', /adminSplash/)
  })
  it('Should be crossed out', () => {
    cy.visit('/login')
    cy.get('#testLine').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
  })
})