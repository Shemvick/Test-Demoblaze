// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('navigateToPage', (url) => {
  cy.visit(url);  
  cy.wait(10000);
  cy.get('#login2').should('be.visible');  
});

Cypress.Commands.add('clickOnElement', (selector, text) => {
  cy.get(selector).contains(text).click(); 
  cy.wait(4000);
  cy.get('#logInModal').should('be.visible');  
  cy.wait(4000);  
});


Cypress.Commands.add("login", (Username, Password) => {
  cy.wait(2000);
  cy.get("#loginusername").type(Username);
  cy.wait(2000);
  cy.get("#loginpassword").type(Password);
  cy.wait(4000);
});

Cypress.Commands.add("login", (invalidUsername, Password) => {
  cy.wait(2000);
  cy.get("#loginusername").type(invalidUsername);
  cy.wait(2000);
  cy.get("#loginpassword").type(Password);
  cy.wait(4000);
});


Cypress.Commands.add("login", (Username, invalidPassword) => {
  cy.wait(2000);
  cy.get("#loginusername").type(Username);
  cy.wait(2000);
  cy.get("#loginpassword").type(invalidPassword);
  cy.wait(4000);
});

Cypress.Commands.add("login", (invalidUsername, invalidPassword) => {
  cy.wait(2000);
  cy.get("#loginusername").type(invalidUsername);
  cy.wait(2000);
  cy.get("#loginpassword").type(invalidPassword);
  cy.wait(4000);
});

Cypress.Commands.add('clickOnElement', (selector, text) => {
  cy.get(selector).contains(text).click(); 
  cy.get('.btn.btn-primary').contains('Log in').click()  
});


