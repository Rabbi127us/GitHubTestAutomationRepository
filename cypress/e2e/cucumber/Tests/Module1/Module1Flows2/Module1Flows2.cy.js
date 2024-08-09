import {Before, Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import report from '../../../Helpers/report';
import home from '../../../Pages/home';

Before(() => {
    cy.intercept('*', { log: false });
    report.setup(__dirname, window);
});

Given('the user is on the Zanoo homepage', () => {
    cy.fixture('links').then(links => {
        cy.visit(links.ZanooHomepage);
    });
    home.zanooLogo().should('exist');
    report.screenshot();
});

When('the user clicks Contact Us', () => {
    report.click(home.contactUs());
});

Then('the user is taken to the Contact Us page', () => {
    home.headingText().should('have.text', "Zanoo Consulting: Delivering beautiful technology");
    report.screenshot();
});

When('the user clicks Home', () => {
    report.click(home.home());
});

Then('the user is taken to the Home page', () => {
    home.zanooLogo().should('exist');
    report.screenshot();
});

afterEach(() => {
    report.attachScreenshots(window);
});