/// <reference types="cypress" />
describe('Home-tests',() => {
    it("open the homepage and verify the url and the title",() =>{
        cy.visit('https://www.happilyever.co/');
        cy.get(".css-vdtqun").click();
        cy.get(".MuiList-root").find('li').first().should("have.text","How do I get better at relationships?").click();
         cy.get('.MuiButton-root').click();
         cy.url().should('include', '/p/lens-self-aware')
        cy.get(".MuiButton-root").click();
        cy.get(".MuiFormControl-root").find(".MuiInput-root.MuiInput-underline").eq(1).type('9876543210');
        
        cy.contains('Get OTP').click();
        cy.get('input[aria-label="Please enter verification code. Digit 1"]').type('1');
        cy.get('input[aria-label="Digit 2"]').type('1');
        cy.get('input[aria-label="Digit 3"]').type('1');
        cy.get('input[aria-label="Digit 4"]').type('1');
        cy.get('.css-elt4h5').click();
        // cy.get('.MuiFormControl-root.MuiTextField-root').find('.MuiInputLabel-root').eq(0).type("mansi");
         cy.get('#standard-basic').eq(0).type('mansi');
        // cy.get("#demo-simple-select").eq(0).should("have.text","<20").click();
        // cy.get(".MuiList-root").find('li').first().should("have.text","<20").click();
        cy.get('#demo-simple-select').select('<20').should('have.value', '1')
        cy.get('#standard-basic').eq(1).type('mansisinghsengar28@gmail.com');
        cy.get(".MuiSelect-nativeInput").find('li').first().should("have.text","I am a Female").click();
         cy.get('.MuiButton-root').click();


    });

    
    
});