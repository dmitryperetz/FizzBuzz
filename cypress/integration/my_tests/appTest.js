/// <reference types = "cypress"/>

describe ('FizzBuzz functional validation', () =>{

    beforeEach(() => {
        cy.visit('http://3.17.211.54:8000');
    });
    

    it('Validation of Fizz',()=>{
        cy.get('#input').type('3');
        cy.get('#enter').click();
        cy.get('body').contains('Result').invoke('text').should('equal','Result: Fizz');
    });

    it('Validation of Buzz',()=>{
        cy.get('#input').type('5');
        cy.get('#enter').click();
        cy.get('body').contains('Result').invoke('text').should('equal','Result: Buzz');
    });

    it('Validation of FizzBuzz',()=>{
        cy.get('#input').type('15');
        cy.get('#enter').click();
        cy.get('body').contains('Result').invoke('text').should('equal','Result: FizzBuzz');
    });

});