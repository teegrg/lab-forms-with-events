describe("Todo App", () => {
  it("adds a new to-do to the list", () => {
    cy.get("input, textarea").clear().type("Wash dishes");
    cy.get("button[type=submit]").click();
    cy.get("li").should(($li) => {
      expect($li).to.have.length(1);
      expect($li.first())
        .to.contain("Wash dishes")
        .and.have.css("text-decoration", "none solid rgb(0, 0, 0)");
    });
  });

  it("adds a second to-do to the list", () => {
    cy.get("input, textarea").clear().type("Wash dishes");
    cy.get("button[type=submit]").click();
    cy.get("input, textarea").clear().type("Be awesome");
    cy.get("button[type=submit]").click();
    cy.get("li").should(($li) => {
      expect($li).to.have.length(2);
      expect($li[1]).to.contain("Be awesome");
    });
  });

  it("displays an error when nothing is submitted", () => {
    cy.get("input, textarea").clear();
    cy.get("button[type=submit]").click();
    cy.get("p").should("not.be.empty");
  });

  it("strikes through an li when clicked", () => {
    cy.get("input, textarea").clear().type("Wash dishes");
    cy.get("button[type=submit]").click();
    cy.get("li").first().click().should("have.css", "text-decoration", "line-through solid rgb(0, 0, 0)");
  });
});
