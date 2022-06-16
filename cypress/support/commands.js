Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    cy.get('#firstName').type('Francine')
    cy.get('#lastName').type('Akemi')
    cy.get('#email').type('francine@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})