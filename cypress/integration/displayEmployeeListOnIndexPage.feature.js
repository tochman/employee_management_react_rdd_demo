/// <reference types="Cypress" />

describe('"/" displays a list of employees', () => {
  // our tests will go here....
  it('when user visits the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('section[name="header"]')
      .should('contain', 'Employee list')
  });

  it('showing 4 employees', () => {
    cy.get('section[name="list"]').within(() => {
      cy.get('li').should('have.length', 4)
    })
  });
});