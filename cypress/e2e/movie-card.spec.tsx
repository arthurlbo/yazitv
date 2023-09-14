describe("MovieCard Component", () => {
    it("should display the movie card component correctly", () => {
        cy.visit("/");

        cy.get("[data-testid=movie-skeleton]").should("be.visible");

        cy.get("[data-testid=movie-skeleton]").should("not.exist");

        cy.get("img").should("be.visible");

        cy.get("[data-testid=movie-progress-bar]").should("be.visible");

        cy.get("[data-testid=movie-party-card]").should("be.visible");
    });
});
