context('Basic', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Login Flow', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/login')

      cy.get('#email').type('robert@mieli.de')
      cy.get('#password').type('SamplePw')
      cy.get('#login-form').contains('Einloggen').click()

      cy.url().should('include', '/user')
  })

  it('Create Funnelgroup', () => {
    // Go to FunnelGroups
      cy.visit('http://localhost:3333/user/funnel-groups')

      // Create a new Funnelgroup 'Test Funnel'
      cy.contains('+ Neue Funnelgruppe').click()
      const funnelName = 'Test Funnel'
      cy.get('#funnelname').type(funnelName)
      cy.get('#actionPanel').contains('Erstellen').click()

      // Check if funnel was created
      cy.get('.funnelList').contains(funnelName)
  })
})
