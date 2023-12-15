describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('#W0wltc > .QS5gu').click()
    cy.get('#APjFqb').type('Gmail')
    cy.contains('.FPdoLc > center > .gNO89b').click()
    //This is my branch
  })
})
