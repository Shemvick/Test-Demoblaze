// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

beforeEach( function(){ 
    cy.fixture('example2').then(function(data)
    {
        this.data = data 
    })
})

Given ('I navigate to demoblaze ecommerce page',function() {

cy.visit('https://www.demoblaze.com/') 
 cy.wait(10000)
})

When('I click on the signup button', function() {
cy.get('[id="signin2"]').click() 
cy.get('[id="signInModal"]').should('be.visible') 
})

When('I enter a valid username and password', function() {
cy.get('[id="sign-username"]').type(this.data.Username2)
cy.get('[id="sign-password"]').type(this.data.Password2)
})

When('I do not enter a valid username and password', function (){
cy.wait(4000)
})

When('I enter an invalid username and invalid password', function(){
    cy.get('[id="sign-username"]').type(this.data.invalidUsername2)
        cy.get('[id="sign-password"]').type(this.data.invalidPassword2)

})

    When('I click the signup button', function() {
    cy.get('[class="btn btn-primary"]').contains('Sign up').click()
})

Then('I should see the message alert', () => {
    cy.on('window:alert', (alertText) => {
    expect(alertText).to.contain('Sign up successful.')
    })
})

Then('I should see the message alert displayed to fill username and password', function(){
    cy.on('window:alert', (alertText) => {
    expect(alertText).to.contain('Please fill out Username and Password.')
    })

})

Then('I should see an message alert displayed to input correct credentials', function() {

    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contain('This user already exists.')
    })
})



