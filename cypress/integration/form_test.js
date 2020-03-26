/* eslint-disable no-undef */
describe("Testing form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Add text to inputs and submit form", () => {
    cy.get('input[name="name"]')
      .type("Natalie")
      .should("have.value", "Natalie");

    cy.get('input[name="email"]')
      .type("email@email.com")
      .should("have.value", "email@email.com");

    cy.get("textarea")
      .type("I want to help people!")
      .should("have.value", "I want to help people!");

    cy.get("#positions")
      .select("Yard Work")
      .should("have.value", "Yard Work");
    cy.get('[type="checkbox"]')
      .check()
      .should("be.checked");
    cy.get("button").click();
  });
});
