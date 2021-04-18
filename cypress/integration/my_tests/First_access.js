/// <reference types = "cypress"/>

describe ('First open FizzBuzz web app', () =>{

    beforeEach(() => {
        cy.visit('http://3.17.211.54:8000');
    });

    it('FizzBuzz title page and enter button background validation',()=>{
        cy.get('#heading').invoke('text').should('equal','Welcome to FizzBuzz!');
        
    });

    it('validation Enter background color',()=>{
        cy.get('#enter')
        .should('have.css','background-color')
        .and('equal','rgb(63, 81, 181)');

    });

    it('validation Enter button font color',()=>{
        cy.get('#enter')
        .should('have.css','color')
        .and('equal','rgb(255, 255, 255)');

    });

    it('validation Clear button font color',()=>{
        cy.get('#clear')
        .should('have.css','color')
        .and('equal','rgb(255, 255, 255)')
    });

    it('validation Clear button background color',()=>{
        cy.get('#clear')
        .should('have.css','background-color')
        .and('equal','rgb(245, 0, 87)')
    });

    it('input label validation',()=>{
        cy.get('#input-label').invoke('text').should('equal','Tell me a number');
    });

    it('result field validation',()=>{
        cy.get('body').contains('Result').invoke('text').should('equal','Result: ');
    });








});