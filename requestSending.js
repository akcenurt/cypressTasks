/// <reference types="cypress" />

const boardName = "nový board"

beforeEach( () => {

    // pred začiatkom testu vymaž všetky boardy

    cy.request("DELETE", "/api/boards")

    cy.request("POST", "/api/boards",
    {
      "name": boardName
    })

})

it('vytvorenie boardu cez api a overenie', () => {

  cy
    .visit('/')

  cy.contains(boardName)
  .should("have.length", 1)
  .should("be.visible")

})