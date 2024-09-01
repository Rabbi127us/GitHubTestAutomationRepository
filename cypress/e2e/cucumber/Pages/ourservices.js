class ourservicesPage {

    getOurServicesButton() {
       return cy.get('a[title="Our Services"]')
    }

    clickOurServicesButton() {
        this.getOurServicesButton().click()
    }


    //cy.url().should('include', '/our-services/');


    getOurServicesUrl() {
        return cy.url()

    }

    navigateToOurServicesUrl() {
        this.getOurServicesUrl().should('include', '/our-services/')
    }



    }
const ourservices = new ourservicesPage();
export default ourservices; 

