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

    it("start page contains login button",() =>{
        loginButtonText.forEach(element => {
            if (cy.get('.btn').should("",element)) {
                return true;
            }
        });
    })

    it("start page contains register button",() =>{
        registerButtonText.forEach(element => {
            if(cy.contains('.btn',element)){
                return true;
            }
        });
    })

    it("start page contains add pin button",() =>{
        addPinButton.forEach(element => {
            if(cy.contains('.btn',element)){
                return true;
            }
        });
    })



})

