/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit("/board/30331457255");

})

it.skip('vytvorenie listu', () => {

  cy.get("h3.CreateList_title")
  .click()

  cy.get(".CreateList input")
  .type("shopping list")

  cy.get(".CreateList button")
  .click()

  cy.get("[data-id='14171201082']")
  .should("be.visible")



})

it.skip('overenie poctu listov', () => {

  cy.get(".List")
  .should("have.length", 3)



})

it.skip('odstranenie listu', () => {

  cy.get("[data-id='78697371239'] .options")
  .click()

  cy.get("[data-id='78697371239'] .delete")
  .click()

  cy.get("[data-id='78697371239']")
  .should("have.length.lessThan", 2)

})

it('overenie odskrtnutia', () => {

  cy.get(".Task input")
  .check()
  .should("be.checked")

  cy.get(".Task label")
  .should("have.class", "completed")

  cy.get(".Task input")
  .uncheck()
  .should("not.be.checked")

  cy.get(".Task label")
  .should("not.have.class", "completed")

})

it('overenie názvu listu', () => {

  cy.get("input.Input.taskTitle")
  .should("have.value", "new list")

})

it.only('overenie textu na pridanie tasku (add card)', () => {

  cy.get("h5.List_addTask")
  .should("contain.text", "Add a card...")



})