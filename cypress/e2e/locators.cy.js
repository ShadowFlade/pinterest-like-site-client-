/// <reference types="cypress"/>
const numberOfItemsOnStart = 20;
describe("on start load",()=>{
    it(`${numberOfItemsOnStart} loaded on start`,()=>{
        cy.visit('/');
        cy.get(".main-post").should('have.length',numberOfItemsOnStart);
    })
})


describe("locating starter page header buttons",() => {
    const loginButtonText = ['login','Login','логин','войти'];
    const registerButtonText = ['register','зарегестрироваться'];
    const addPinButton = ['add pin','добавить пост'];

    it("start page contains login button",()=>{
        cy.isButtonWithTextExists(loginButtonText);
    })

    it("start page contains register button",()=>{
        cy.isButtonWithTextExists(registerButtonText);
    })

    it("start page contains addPin button",()=>{
        cy.isButtonWithTextExists(addPinButton);
    })




})

