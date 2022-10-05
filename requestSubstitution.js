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

it('zoznam dvoch boardov z fixture', () => {

  // použi súbor twoBoards.json z fixtures foldra. do tohto it() bloku nemusíš nič písať. stačí, že zmeníš .route() príkaz v beforeEach bloku

})

it('zoznam boardov s hviezdickou z fixture', () => {

  // ak sa Ti podarilo splniť predošlú úlohu, stačí si vyfiltrovať tento test a zmeniť dáta v súbore twoBoards.json po uložení testu a súboru twoBoards.json by si mal/a vidieť správny výsledok

})

it.only('chyba pri vytvoreni tasku', () => {

  cy.get(".board_item").eq(0)
  .click()

  cy.contains("Add a card")
  .click()

  cy.get(".List textArea")
  .type("novinka{enter}")

  cy.get("#errorMessage")
  .should("be.visible")

  // pridaj si ďalší .route() príkaz, ktorým si odchytíš api volanie, ktoré sa robí pri vytvorení tasku. nahraď odpoveď tak, aby zo servra prišiel chybový status kód. dôležitá poznámka: pri nahradzovaní odpovede je parameter „response“ povinný

})