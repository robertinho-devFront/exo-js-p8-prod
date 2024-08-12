describe('Validations Exercice 4: ', () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/Exercice4");
  })

  it('Displays \'Bonjour, vous avez cliqué sur le bouton !\'', () => {
    cy.contains('Cliquez ici').click()
    cy.get('p').should('exist')
    cy.contains('p', 'Bonjour, vous avez cliqué sur le bouton !')
  })
})
