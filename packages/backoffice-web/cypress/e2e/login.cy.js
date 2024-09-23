describe('Login Page', () => {
  it('should load the login page', () => {
    cy.visit('/auth/login');

    cy.contains('h2', 'Iniciar sesión').should('be.visible');
  });
});
