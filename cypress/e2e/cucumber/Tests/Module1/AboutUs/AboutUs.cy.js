import {Before, Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import report from '../../../Helpers/report';
import home from '../../../Pages/home';
import aboutus from '../../../Pages/aboutus';


Before(() => {
    cy.intercept('*', { log: false });
    report.setup(__dirname, window);
});

Given('the user is on the Zanoo homepage', () => {
    cy.fixture('links').then(links => {
        cy.visit(links.ZanooHomepage);
    });
    home.zanooLogo().should('exist')
    report.screenshot();
});

When('the user clicks About Us', () => {
    report.click(aboutus.aboutUs());
});

Then('the user is taken to the About Us page', () => {
    aboutus.headingText().invoke('text').then((text) => {
        const normalizedText = text.replace(/\s+/g, ' ').trim();
        expect(normalizedText).to.equal("Our first class standards deliver quality assurance and testing services with professionalism.");
    });
    report.screenshot();
});


When('the user clicks Our Services button', () => {
    cy.get('.cc-btn.cc-dismiss').click()
    report.click(aboutus.clickOurServicesButtonOnAboutUsPage());
});

Then('the user is taken to the Our Services page', () => {
    aboutus.ensureOurServicesPageIsVisble().should('exist');
    report.screenshot();
});

afterEach(() => {
    report.attachScreenshots(window);
});