beforeEach(() => {
  cy.visit("http://localhost:5173");
});
it("auth", () => {
  cy.get("#email").type("totototo@toto.fr");
  cy.get("#password").type("Toto*1234");
  cy.get("._button_1ahi6_1").first().click().wait(5000);
  cy.url().should("contain","http://localhost:5173/dashboard");
  cy.contains("button", "Ajouter un article");
  // cy.contains("span", "Pot");
});

it("register", ()=> {
  cy.get("._button_1ahi6_1").last().click();
  cy.contains("h2", "Inscription");
  cy.get("#firstname").type("Vanessa");
  cy.get("#lastname").type("Test");
  cy.get("#pseudo").type("Vava Test");
  cy.get("#email").type("tototototototo@toto.fr");
  cy.get("#password").type("Toto*1234");
  cy.get("#avatar").type("https://st.depositphotos.com/1008402/58769/i/450/depositphotos_587692484-stock-illustration-illustration-smiling-woman-cartoon-close.jpg");
  cy.contains("button", "Sinscrire").click().wait(4000);
  cy.contains("p", "Pas encore connu ?")
})