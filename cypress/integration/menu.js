describe('The Wise Owls - Menus', function () {
  describe('Admin Splash Page', function () {
    it('Should open menu on click', function () {
      cy.visit('/adminSplash')
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
      cy.url().should('match', /adminSplash/)
    })
    
    it('Should open availability page on click', function () {
      cy.get('#testMenuAdminSplash').click()
      cy.get('#testAvailability').click()
      cy.url().should('match', /availability/)
    })

    it('Should open staff management page on click', function () {
      cy.visit('/adminSplash')
      cy.get('#testMenuAdminSplash').click()
      cy.get('#testStaff').click()
      cy.url().should('match', /staff/)
    })

    it('Should open student management page on click', function () {
      cy.visit('/adminSplash')
      cy.get('#testMenuAdminSplash').click()
      cy.get('#testStudents').click()
      cy.url().should('match', /students/)
    })

    it('Should open class management page on click', function () {
      cy.visit('/adminSplash')
      cy.get('#testMenuAdminSplash').click()
      cy.get('#testClasses').click()
      cy.url().should('match', /classes/)
    })

    it('Should open history page on click', function () {
      cy.visit('/adminSplash')
      cy.get('#testMenuAdminSplash').click()
      cy.get('#testHistory').click()
      cy.url().should('match', /history/)
    })

    it('Should open splash page on logout click', function () {
      cy.visit('/adminSplash')
      cy.get('#testMenuAdminSplash').click()
      cy.get('#testLogout').click()
      cy.url().should('match', /\//)
    })
  })

  describe('Availability Page', function () {
    it('Should open menu on availability page', function () {
      cy.visit('/availability')
      cy.get('#testMenuAvailability').click()
      cy.window().its('testOpen').should('equal', true)
    })

    it('Should close menu on click', function () {
      cy.get('#testClose').click()
      cy.window().its('testOpen').should('equal', false)
    })

    it('Should open home on click', function () {
      cy.get('#testMenuAvailability').click()
      cy.get('#testHome').click()
      cy.url().should('match', /adminSplash/)
    })

    it('Should open availability page on click', function () {
      cy.visit('/availability')
      cy.get('#testMenuAvailability').click()
      cy.get('#testAvailability').click()
      cy.url().should('match', /availability/)
    })

    it('Should open staff management page on click', function () {
      cy.visit('/availability')
      cy.get('#testMenuAvailability').click()
      cy.get('#testStaff').click()
      cy.url().should('match', /staff/)
    })

    it('Should open student management page on click', function () {
      cy.visit('/availability')
      cy.get('#testMenuAvailability').click()
      cy.get('#testStudents').click()
      cy.url().should('match', /students/)
    })

    it('Should open class management page on click', function () {
      cy.visit('/availability')
      cy.get('#testMenuAvailability').click()
      cy.get('#testClasses').click()
      cy.url().should('match', /classes/)
    })

    it('Should open history page on click', function () {
      cy.visit('/availability')
      cy.get('#testMenuAvailability').click()
      cy.get('#testHistory').click()
      cy.url().should('match', /history/)
    })

    it('Should open splash page on logout click', function () {
      cy.visit('/availability')
      cy.get('#testMenuAvailability').click()
      cy.get('#testLogout').click()
      cy.get('#splashHeader').should('exist')
    })
  })
})