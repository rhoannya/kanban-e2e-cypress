describe('Kanban App', () => {
  it('Carregar página inicial', () => {
    cy.visit('/');
    cy.contains('Quadro Kanban').should('be.visible');
    cy.contains('Adicionar outra lista').should('be.visible');
  });
});
