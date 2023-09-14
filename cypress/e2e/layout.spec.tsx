describe("Homepage", () => {
    it("should render the homepage correctly", () => {
        cy.visit("/");

        cy.get("[data-testid=main-nav]").should("be.visible");

        cy.get("[data-testid=header]").should("be.visible");

        cy.get("[data-testid=hero]").should("be.visible");

        cy.get("[data-testid=footer]").should("be.visible");

        cy.viewport("ipad-mini");

        cy.get("[data-testid=header]").should("not.be.visible");
    });
});
