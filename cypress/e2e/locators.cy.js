/// <reference types="cypress"/>
    const numberOfPostsOnStart = 20;
    const loginButtonText = ['login','Login','логин','войти'];
    const registerButtonText = ['register','зарегестрироваться'];
    const addPinButtonText = ['add pin','добавить пост'];
describe("start page",()=>{
    // before(()=>{
    //     cy.visit('/');
    //     cy.intercept("GET","http://localhost:3002/pins/20",{fixture:"posts.json"});
    // })
    beforeEach(()=>{
        cy.visit('/');
        cy.intercept("GET","http://localhost:3002/pins/20",{fixture:"posts.json"});
        cy.intercept("GET","http://localhost:3002/auth",{fixture:"posts.json"});
    })
    it(`${numberOfPostsOnStart} posts loaded on start`,()=>{
        cy.get(".main-post").should('have.length',numberOfPostsOnStart);
    })

    it("start page contains login button",()=>{
        cy.isButtonWithTextExists('login-button',loginButtonText);
    })


    it("start page contains register button",()=>{
        cy.isButtonWithTextExists('register-button',registerButtonText);
    })

    it("start page contains addPin button",()=>{
        cy.isButtonWithTextExists('add-pin-button',addPinButtonText);
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
    it('cookies bar is hidden on click',() => {
        const cokkieClass = 'cookie-prompt';
        const numberOfButtonsInCookie = cy.get('.cookie-prompt').find('.btn').children.length;
        for(let i=0;i<numberOfButtonsInCookie;i++){
            cy.visit('/');
            cy.wrap(cy.get('.'+cokkieClass).find('.btn').eq(i)).click();
            cy.wait(4000);
            cy.get('.'+cokkieClass).should('not.exist');
            cy.wrap(cy.get('.fade')).click()
            }}
    );

    it('login/register window is opened when clicked',()=>{
        cy.get('.header__auth').find('.btn').each(item=>{
                cy.wrap(item).click();
                cy.get('.register-login-body',{timeout:3000}).should('be.visible');
                cy.get('.fade').each(item=>item.click());
                cy.wait(1000);
            }
        )
        })
    
})







