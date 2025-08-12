describe('Kanban - smoke', () => {
  it('abre a home e responde 200', () => {
    // Garante que o servidor está respondendo
    cy.request('/').its('status').should('eq', 200);

    // Abre a página principal
    cy.visit('/');

    // Valida título da aba (robusto; se não tiver "kanban", ainda veremos o 200)
    cy.title().then((t) => {
      cy.log('title:', t);
    });

    // Confirma que a página renderizou algo significativo
    cy.get('body').should('be.visible');

    // (Opcional) tenta achar algum texto “Kanban” se existir
    cy.contains(/kanban/i, { matchCase: false }).should('exist');
  });
});
