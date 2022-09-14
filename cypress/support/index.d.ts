/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable<Subject = any> {
        getByTestId(testId: number): Chainable<Element>;
        isButtonWithTextExists(texts: []): Chainable<Element>;

    }
  }