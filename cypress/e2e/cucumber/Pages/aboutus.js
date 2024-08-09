class aboutusPage{

    zanooLogo(){
        return cy.get('img[alt="Zanoo logo in white"]');
    };
    
    aboutUs(){
        return cy.get('ul#menu-primary-menu').find('a[title="About Us"]');
    };

    home(){
        return cy.get('ul#menu-primary-menu').find('a[title="Home"]');
    };

    clickOurServicesButtonOnAboutUsPage(){
        return cy.get('a[title="Our services"]')
    };

    ensureOurServicesPageIsVisble(){
     return cy.get('div.vc_row.vc_custom_1551896057017')
   
    }

    
    headingText(){
        return cy.get('div.heading-text');
    };
};
const aboutus = new aboutusPage();
export default aboutus;