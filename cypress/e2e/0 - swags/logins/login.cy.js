/// <reference types="cypress" />

context('Logins', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login válido com usuário padrão', () => {
    //cy.get('[data-test="username"]').type('standard_user');
    //cy.get('[data-test="password"]').type('secret_sauce');
    //cy.get('[data-test="login-button"]').click();
    //cy.get('[data-test="title"]').should('be.visible');
    //cy.get('[data-test="title"]').should('have.text', 'Products');
    //cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    //cy.get('[data-test="primary-header"] div.app_logo').click();
    //cy.get('#react-burger-menu-btn').click();
    //cy.get('[data-test="logout-sidebar-link"]').click();
    //cy.get('#login_button_container div.error-message-container').should('be.exist');
    cy.get('[data-test="username"]').click();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').click();
    cy.get('[data-test="title"]').should('have.text', 'Products');
  });

   it('Login inválido', () => {
     cy.get('[data-test="username"]').click();
     cy.get('[data-test="username"]').click();
     cy.get('[data-test="username"]').type('teste_user');
     cy.get('[data-test="password"]').type('321');
     cy.get('[data-test="login-button"]').click();
     cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
   });

})