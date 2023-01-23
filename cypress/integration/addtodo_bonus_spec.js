describe("Todo App - Bonus", () => {
  it("clears the input when a todo is added", () => {
    cy.get("textarea").clear().type("Wash dishes");
    cy.get("button[type=submit]").click();
    cy.get("textarea").should("have.value", "");
  });

  it("deletes only one item when its delete button is pressed", () => {
    cy.get("textarea").clear().type("Wash dishes");
    cy.get("button[type=submit]").click();
    cy.get("textarea").clear().type("Be awesome");
    cy.get("button[type=submit]").click();
    cy.get("li button").first().click();
    cy.get("li").should(($li) => {
      expect($li).to.have.length(1);
      expect($li[0]).to.contain("Be awesome");
    });
  });

  it("no longer strikes through an li when clicked a second time", () => {
    cy.get("textarea").clear().type("Wash dishes");
    cy.get("button[type=submit]").click();
    cy.get("li")
      .first()
      .click()
      .click()
      .should("have.css", "text-decoration", "none solid rgb(0, 0, 0)");
  });

  it("adds multiple to-dos when the text input has multiple lines", () => {
    cy.get("textarea").clear().type("Wash dishes\nBe awesome");
    cy.get("button[type=submit]").click();
    cy.get("li").should(($li) => {
      expect($li).to.have.length(2);
      expect($li[0]).to.contain("Wash dishes");
      expect($li[1]).to.contain("Be awesome");
    });
  });
});
