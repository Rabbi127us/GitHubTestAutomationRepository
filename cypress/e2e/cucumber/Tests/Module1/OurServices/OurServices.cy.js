import {Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import home from '../../../Pages/home';
import report from '../../../Helpers/report';
// Given("I am on the landing page", () => { 
// cy.visit("https://zanoo.consulting/")
// })


Given("the user is on the Zanoo homepage", () => {
  cy.fixture('links').then(links => {
      cy.visit(links.ZanooHomepage)
  });
  home.zanooLogo().should('exist')
  //report.screenshot();
});


When("i click our services button", () => {
cy.get('a[title="Our Services"]').click();

})

Then("I should be taken to our services page", () => {
cy.url().should('include', '/our-services/');

})