/// <reference types="cypress"/>
    const numberOfPostsOnStart = 20;
    const loginButtonText = ['login','Login','логин','войти'];
    const registerButtonText = ['register','зарегестрироваться'];
    const addPinButtonText = ['add pin','добавить пост'];
describe("start page",()=>{
    before(()=>{
        cy.visit('/');
    })
    it(`${numberOfPostsOnStart} posts loaded on start`,()=>{
        cy.get(".main-post").should('have.length',numberOfPostsOnStart);
    })

    it("start page contains login button",()=>{
        cy.isButtonWithTextExists(loginButtonText);
    })

    it("start page contains register button",()=>{
        cy.isButtonWithTextExists(registerButtonText);
    })

    it("start page contains addPin button",()=>{
        cy.isButtonWithTextExists(addPinButtonText);
    })

    it("when add pin button is clicked, modal window is shown (not logged in)",() => {
        cy.get(".add-pin-button").then((item) => {
            addPinButtonText.forEach(text=>{
                const textCandidate = item.contents()[0].data.toLowerCase().trim();
                if(textCandidate.toLowerCase() === text){
                    item.click();
                    cy.get('.modal-ts__body').should('be.visible');
                }

            })
        })
    })
})








