describe("Home page content", () => {
    it("should render all sections correctly", () => {
        cy.visit("/");

        cy.get("[data-testid=continue-watching-section]").should("be.visible");

        cy.get("[data-testid=trending-now-section]").should("be.visible");

        cy.get("[data-testid=parties-section]").should("be.visible");

        cy.get("[data-testid=my-list-section]").should("be.visible");

        cy.get("[data-testid=top-picks-section]").should("be.visible");

        cy.get("[data-testid=new-releases-section]").should("be.visible");

        cy.get("[data-testid=acclaimed-movies-section]").should("be.visible");
    });
});
