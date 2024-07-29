describe('test visual with percy', () => {
    it('should take snapshots', () => {
        cy.visit('http://localhost:5173');
        cy.percySnapshot('homepage');
    });
});