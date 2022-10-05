/// <reference types="cypress" />

const exp = require("constants");

beforeEach( () => {

  cy
    .server()

  cy
    .route('POST', "/api/tasks")
    .as('createTask')

  cy
    .visit("/board/5965038413");

  cy.route("DELETE", "/api/lists/*")
  .as("deleteList")

  cy.route("PATCH","/api/tasks/*")
  .as("checkInput")


});

it('vytvorenie tasku', () => {

  cy.get("h5.List_addTask")
  .click()

  cy.get(".List")
  .children(".TextArea")
  .type("nová věc{enter}")

  cy.wait("@createTask")
  .its("response.body.created")
  .should("eq","2022-09-20")




  // vytvor si v teste nový task v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení. pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu

})

it('odstránenie zoznamu', () => {

  cy.get(".List").eq(1).children(".dropdown")
  .click()

  cy.get("[data-id='84335277341'] .delete")
  .click()

  cy.wait("@deleteList")
  .its("status")
  .should("eq", 200)



  // manuálne si vytvor nový zoznam a pomocou testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu

})

it.only('zaskrtnutie tasku', () => {

  cy.get(".Task input").eq("4")
  .check()

  /*
  cy.wait("@checkInput")
  .its("response.body.completed")
  .should("be.true")
  */

/*
  cy.wait("@checkInput")
  .then( task => {
    expect(task.status).to.eq(200)
    expect(task.response.body.title).to.eq("nová věc")
    expect(task.response.body.completed).to.be.true
  
  })*/



  // pomocou testu si zaškrtni task v zozname a odsleduj si request, ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request. skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu

})