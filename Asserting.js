/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit("/board/5965038413"); // doplň si adresu svojho boardu

});

it('over vsetky zaskrtnute tasky', () => {



  cy.get(".Task label",{timeout:20000}).should( taskLabels => {
    expect(taskLabels[0]).to.have.class("completed");
    expect(taskLabels[1]).to.have.class("completed");
    expect(taskLabels[2]).to.have.class("completed");
    expect(taskLabels[3]).to.have.class("completed");

  });



  // 1. zaškrtni si jeden z taskov
  // 2. použi príkaz .then() a over obidva tasky v zozname naraz
  // 3. skús jeden z taskov odškrtnúť tak, aby test neprechádzal
  // 4. použi príkaz .should() a task znova zaškrtni, aby Ti test prešiel počas toho ako test beží
  // poznámka: na vypracovanie tohto testu môžeš kontrolovať checkbox, alebo text tasku (ten má v zaškrtnutom stave classu .completed)

})

it.only('over vsetky zaskrtnute tasky', () => {



  cy.get(".Task input").then( taskInputs => {
    expect(taskInputs[0]).to.be.checked;
    expect(taskInputs[1]).to.be.checked;
    expect(taskInputs[2]).to.be.checked;
    expect(taskInputs[3]).to.be.checked;

  })
})