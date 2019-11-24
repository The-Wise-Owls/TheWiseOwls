describe('The Wise Owls', function () {
  it('Should render The Wise Owls splash page', function() {
    cy.visit('/');
  })

  it('Should navigate to login page on click', function () {
    cy.get('#testLoginButton').click()
    cy.url().should('match', /login/)
  })
  
  it('Should navigate to AdminSplash page on click', function () {
    cy.get('#testLoginButton2').click()
    cy.url().should('match', /adminsplash/)
  })
  
  it('Should open menu on click', function () {
    cy.get('#testMenuAdminSplash').click()
    cy.window().its('testOpen').should('equal', true)
  })

  it('Should close menu on click', function () {
    cy.get('#testClose').click()
    cy.window().its('testOpen').should('equal', false)
  })
  
  it('Should open home on click', function () {
    cy.get('#testMenuAdminSplash').click()
    cy.get('#testHome').click()
    cy.url().should('match', /adminsplash/)
  })
  
  it('Should open availability page on click', function () {
    cy.get('#testMenuAdminSplash').click()
    cy.get('#testAvailability').click()
    cy.url().should('match', /availability/)
  })
  
  it('Should navigate away from availability when back arrow is clicked', function () {
    cy.get('#testBackAvailability').click()
    cy.url().should('not.match', /availability/)
  })

  it('Should open menu on availability page', function () {
    cy.visit('/availability');
    cy.get('#testMenuAvailability').click()
    cy.window().its('testOpen').should('equal', true)
  })

  it('should navigate to request page on click', function() {
    cy.visit('/');
    cy.get('#testRequestButton').click()
    cy.url().should('match', /request/)
  })

  it('should reload the request page and still have content served', function() {
    cy.reload()
    cy.url().should('match', /request/)
    cy.get('#requestTest').should('exist')
  } )
})