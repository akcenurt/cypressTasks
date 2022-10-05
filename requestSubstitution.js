/// <reference types="cypress" />

const { verify } = require("crypto");

beforeEach( () => {

  cy
    .server()

  /*
    cy
    .route({
      method: 'GET',
      url: '/api/boards',
      response: "fx:twoBoards",
    })
    .as('boardList')
  */

  cy
    .route({
      method: 'POST',
      url: '/api/tasks',
      response: "error occured",
      status: 500
    })
    .as('createBoard')

  cy
    .visit('/');

});

it.only('chyba pri vytvoreni tasku', () => {

  cy.get(".board_item").eq(0)
  .click()

  cy.contains("Add a card")
  .click()

  cy.get(".List textArea")
  .type("novinka{enter}")

  cy.get("#errorMessage")
  .should("be.visible")

})
