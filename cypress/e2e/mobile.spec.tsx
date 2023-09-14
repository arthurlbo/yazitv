describe("Mobile Main Navigation", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render all child components", () => {
        cy.viewport("ipad-mini").then(() => {
            cy.get("[data-testid='main-nav-mobile']").should("exist");

            cy.get("[data-testid='search-button']").should("exist");

            cy.get("[data-testid='drawer-button']").should("exist");
        });
    });

    it("should open the drawer when the drawer button is clicked", () => {
        cy.viewport("ipad-mini").then(() => {
            cy.get("[data-testid='drawer-button']").click();

            cy.get("[data-testid='drawer-content']").should("be.visible");
        });
    });

    it("should close the drawer when the close button is clicked", () => {
        cy.viewport("ipad-mini").then(() => {
            cy.get("[data-testid='drawer-button']").click();

            cy.get("[data-testid='drawer-content']").should("be.visible");

            cy.get("[data-testid='drawer-close-button']").click();

            cy.get("[data-testid='drawer-content']").should("not.be.visible");
        });
    });

    it("should render the avatar, name, and email of the logged-in user in the drawer header", () => {
        cy.viewport("ipad-mini").then(() => {
            cy.get("[data-testid='drawer-button']").click();

            cy.get("[data-testid='drawer-header']").should("contain", "Arthur Lobo");

            cy.get("[data-testid='drawer-header']").should("contain", "arthur@email.com");
        });
    });

    it("should render the My Messages and Notifications buttons in the drawer", () => {
        cy.viewport("ipad-mini").then(() => {
            cy.get("[data-testid='drawer-button']").click();

            cy.get("[data-testid='interaction-button-my-messages']").should("be.visible");

            cy.get("[data-testid='interaction-button-notifications']").should("be.visible");
        });
    });

    it("should render the Main Menu, Connections, and CTA Card components in the drawer", () => {
        cy.viewport("ipad-mini").then(() => {
            cy.get("[data-testid='drawer-button']").click();

            cy.get("[data-testid=main-nav-main-menu-section]").should("be.visible");

            cy.get("[data-testid=main-nav-divider]").should("have.length", 6);

            cy.get("[data-testid=main-nav-connections-section]").should("be.visible");

            cy.get("[data-testid=main-nav-cta-card]").should("be.visible");
        });
    });

    it("should be hidden on desktop devices", () => {
        cy.get("[data-testid='main-nav-mobile']").should("not.be.visible");
    });
});
