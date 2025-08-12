describe('Kanban App', () => {
  it('Carregar página inicial', () => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
    cy.contains('Quadro Kanban').should('be.visible');
    cy.contains('Adicionar outra lista').should('be.visible');
  });
});
