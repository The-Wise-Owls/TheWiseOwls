describe('The Wise Owls - Login', function () {
  it('Should navigate from Login page to AdminSplash page on click', function () {
    cy.visit('/login')
    cy.get('#testLoginButton2').click()
    cy.url().should('match', /adminSplash/)
  })
})