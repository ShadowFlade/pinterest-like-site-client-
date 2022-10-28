/// <reference types="cypress"/>
describe("Working with http requests",()=>{
	beforeEach(()=>{
		cy.visit('/');
	})
	it("should intercept the request to DB for fetching posts(pins) and find post with 'ferris' in it",()=>{
		cy.intercept("GET","https://localhost:3000",{fixture:"posts.json"});
		cy.get('.main-post__title').contains('ferris');
	})
})