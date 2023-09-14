describe("Movies section", () => {
    it("should display the movies section correctly", () => {
        cy.visit("/");

        cy.get("[data-testid=movies-section-title").should("be.visible");

        cy.get("[data-testid=movies-list]").should("be.visible");

        cy.get("[data-testid=next-button").should("be.visible");

        cy.get("[data-testid=previous-button").should("be.visible");

        cy.get("[data-testid=previous-button").click({ multiple: true });

        cy.get("[data-testid=movies-list").children().last().should("be.visible");

        cy.get("[data-testid=next-button").click({ multiple: true });

        cy.get("[data-testid=movies-list").children().first().should("be.visible");
    });
});
