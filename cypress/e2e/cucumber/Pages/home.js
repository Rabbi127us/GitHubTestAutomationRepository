class signupPage{

    zanooLogo(){
        return cy.get('img[alt="Zanoo logo in white"]');
    };
    
    contactUs(){
        return cy.get('ul#menu-primary-menu').find('a[title="Contact Us"]');
    };

    home(){
        return cy.get('ul#menu-primary-menu').find('a[title="Home"]');
    };

    headingText(){
        return cy.get('div.heading-text');
    };
};
const signup = new signupPage();
export default signup;