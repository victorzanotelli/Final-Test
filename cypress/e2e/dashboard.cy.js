beforeEach(() => {
  cy.visit("http://localhost:5173");
  cy.get("#email").type("totototo@toto.fr");
  cy.get("#password").type("Toto*1234");
  cy.get("._button_1ahi6_1").first().click().wait(5000);
  cy.url().should("contain","http://localhost:5173/dashboard");
  cy.contains("button", "Ajouter un article");
  cy.contains("button", "Tous les articles");
});

it("add an article", ()=> {
  cy.get("._addArticle_1ptdj_58").first().click();
  cy.contains("h2", "Ajouter un article");
  cy.get("#title").type("Article de test Cypress");
  cy.get("#description").type("Cet un article de test");
  cy.get("#categorie").select("pot");
  cy.get("._buttonAddArticle_1sfud_92").click().wait(2000);
  cy.url().should("equal", "http://localhost:5173/dashboard")
})

it("view an article", () =>{
cy.get("._link_obwnp_16").first().click()
})