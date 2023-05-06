
/// <reference types="cypress" />
import { Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
//import * as fs from 'fs'
const fs = require('fs')
var request = require('request')
var page;
var singleuser;



Given('I call the list users API', () => {
cy.request('GET', 'https://reqres.in/api/users?page=2').as('users');
});

Then('the users API should return a {int} status code', (status) => {
    cy.get('@users').its('status').should('be.equal', status);
    });

Then('the users API should show {int} users in the list', (total) => {
    cy.get('@users').its('body').should('have.property', 'total', total);
    });    
   
Then('the first user name should be {string}', (name) => {
    cy.get('@users').its('body.data.0').should('have.property', 'first_name', name);
    });
       

Given(`I make a GET request to {string}`, (url) => {
    cy.request('GET', `${url}`).as('apiResponse');
    });
   
Then(`the response status should be {int}`, (statusCode) => {
    cy.get('@apiResponse').its('status').should('equal', statusCode);
    });
   
Then(`the response JSON should have property {string}`, (property) => {
    cy.get('@apiResponse').its('body').should('have.property', property);
    });
   
Then(`the response JSON property {string} should have property {string}`, (parentProperty, childProperty) => {
    cy.get('@apiResponse').its(`body.${parentProperty}`).should('have.property', childProperty);
    });
   












