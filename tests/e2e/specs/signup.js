import { faker } from '@faker-js/faker';

const email = faker.internet.email()

describe('Register', () => {
  it('Visits the register url', () => {
    cy.visit('#/register')
    // url should be /register
    cy.url().should('include', '/register')
  })
})
