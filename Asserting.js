/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit("/board/5965038413");

});

it('over vsetky zaskrtnute tasky', () => {



  cy.get(".Task label",{timeout:20000}).should( taskLabels => {
    expect(taskLabels[0]).to.have.class("completed");
    expect(taskLabels[1]).to.have.class("completed");
    expect(taskLabels[2]).to.have.class("completed");
    expect(taskLabels[3]).to.have.class("completed");

  });


})

it.only('over vsetky zaskrtnute tasky', () => {



  cy.get(".Task input").then( taskInputs => {
    expect(taskInputs[0]).to.be.checked;
    expect(taskInputs[1]).to.be.checked;
    expect(taskInputs[2]).to.be.checked;
    expect(taskInputs[3]).to.be.checked;

  })
})
