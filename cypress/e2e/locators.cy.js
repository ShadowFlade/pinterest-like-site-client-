/// <reference types="cypress"/>

describe("Locators",() => {
    beforeEach(()=>{
        cy.visit("/");
    })
    it("locating elments with get",() =>{
        cy.get(".btn").get("");
    })


})
