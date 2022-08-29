import { faker } from '@faker-js/faker';


describe('Login', () => {
  it('Visits the login url', () => {
    cy.visit('/login')
    // url should be /login
    cy.url().should('include', '/login')
  })
  it('Checks input types', () => {
    cy.visit('/login')
    // Checks input type is email
    cy.get('input[name=email]')
      .invoke('attr', 'type')
      .should('contain', 'email')
    // Checks input type is password
    cy.get('input[name=password]')
      .invoke('attr', 'type')
      .should('contain', 'password')
  })
  it('Login', () => {
    cy.visit('/login')
    cy.get('input[name=email]').clear().type('admin@admin.com')
    cy.get('input[name=password]').clear().type('12345{enter}')
    // url should be home
    cy.url().should('include', '/home')
  })
  it('Logout', () => {
    // Logout
    cy.logout()
  })
  it('Go to register password', () => {
    cy.visit('/login')
    cy.get('a.btnForgotPassword').should('be.visible').click()
    // url should be register
    cy.url().should('include', '/register')
  })
})
