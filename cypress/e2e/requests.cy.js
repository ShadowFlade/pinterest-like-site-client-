/// <reference types="cypress"/>
describe("Working with http requests",()=>{
	beforeEach(()=>{
		cy.visit('/');
		cy.intercept("GET","http://localhost:3002/pins/20",{fixture:"posts.json"});

	})
	it("should intercept the request to DB for fetching posts(pins) and find post with 'ferris' in it",()=>{
		cy.get('.main-post__title').contains('ferris');
	})
})