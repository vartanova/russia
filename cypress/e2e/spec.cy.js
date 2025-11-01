describe("App Russia E2E", () => {
  it("should have page a form", () => {
    cy.visit('http://localhost:5173/#/travel');

    cy.get("input").should("have.value", "");
    cy.get("button[type='submit']").should("have.text", "Принять");
    cy.get('input[name="destination"]')

      .type("New Trip")
      .should("have.value", "New Trip");
    cy.get('input[name="dateStart"]')
      .type("11.11.11")
      .should("have.value", "11.11.11");
    cy.get('input[name="dateEnd"]')
      .type("11.11.11")
      .should("have.value", "11.11.11");

    cy.contains("Принять").click();

    cy.get('input[name="destination"]').should("have.value", "");

    cy.get('input[name="dateStart"]').should("have.value", "");
    cy.get('input[name="dateEnd"]').should("have.value", "");
  });

  it("should have page a form", () => {
    cy.visit("http://localhost:5173/#/request");

    cy.get("button").filter(':contains("Удалить")').last().click();
  });
});
