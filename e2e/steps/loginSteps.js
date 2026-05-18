/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('que eu estou na página de login do saucedemo', () => {
    cy.log('Acessando a página de login do saucedemo');
    cy.visit('https://www.saucedemo.com/');
})

When('eu insiro o usuário e a senha correta', () => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
})