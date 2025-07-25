/// <reference types='cypress' />


describe('Teste - Formulário', () => {
  it.only('Preencher campos com sucesso', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.contains('Automation Testing Practice').should('be.visible')
    cy.get('#name').type('Teste')
    cy.get('input[placeholder="Enter EMail"]').type('teste@gmail.com')
    cy.get('#phone').type('83988744525')
    cy.get('input[value="female"]').click()
    cy.get('input[type="checkbox"]').check('sunday')
    cy.get('#country').select('Canada')
    cy.get('#colors').select('Red')
    cy.get('#datepicker').click()
    cy.get('a[data-date="24"]').click()
    cy.get('#datepicker').should('have.value','07/24/2025')
    cy.get('#singleFileInput').selectFile('cypress\\fixtures\\imgTest.png')
    cy.get('#singleFileInput').should('have.value','C:\\fakepath\\cypress\\fixtures\\imgTest.png')
    
  })
  it('Validar botão Enter', () =>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('button[name="start"]').click()
    cy.get('button[name="stop"]').should('be.visible')
    cy.contains('STOP').should('be.visible')
    cy.contains('button','STOP').click()
    
  })

})