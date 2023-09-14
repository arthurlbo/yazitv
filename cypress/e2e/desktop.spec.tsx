describe("Desktop Main Navigation", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render all child components", () => {
        cy.get("[data-testid=main-nav-main-menu-section]").should("be.visible");
        cy.get("[data-testid=main-nav-divider]").should("have.length", 2);
        cy.get("[data-testid=main-nav-connections-section]").should("be.visible");
        cy.get("[data-testid=main-nav-cta-card]").should("be.visible");
    });

    it("should be hidden on mobile devices", () => {
        cy.viewport("ipad-mini").then(() => {
            cy.get("[data-testid=main-nav-desktop]").should("not.be.visible");
        });
    });
});
