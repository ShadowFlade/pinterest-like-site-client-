/// <reference types="cypress" />
function buttonWithTextExists(text){
    
}
describe ("habit", ()=>{
    
    const addPinButton = ['add pin','Add pin','Add Pin'];

    beforeEach(() => {
        cy.visit("/");
    })
    it("should show a modal window for adding pin when button 'Add pin' is clicked",()=>{

        cy.isButtonWithTextExists(addPinButton);
    })
})