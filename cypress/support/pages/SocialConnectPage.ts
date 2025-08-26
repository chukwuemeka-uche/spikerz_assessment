class SocialConnectPage {
    private readonly selectors = {
        cards: () => cy.get("img+div"),
        connectButton: () => cy.get("app-social-connect button"),
        headerTitle: () => cy.get("div>h5",{timeout:15000}),
        image: () => cy.get(".ant-card-body img"),
        handleText: () => cy.get("app-profile-picture+div")
    }

    clickCard(title: string) {
        this.selectors.cards().each(card => {
            if (card.text() === title) {
                cy.wrap(card).should("be.visible").click();
            }
        });
        return this;
    };

    clickSocialConnectButton() {
        this.selectors.connectButton().should("be.visible").click().then(() => {
            cy.authUser("/social-connect/youtube?code=fake-code&state=fake-state");
        });
        return this;
    };

    verifyConfirmDetailsText(text: string) {
        this.selectors.headerTitle().should("have.text", text);
        return this;
    };

    verifyImgIsDisplayed() {
        this.selectors.image().should("be.visible");
        return this;
    };

    verifyHandle(handle: string) {
        this.selectors.handleText().should("have.text", handle);
        return this;
    };
}
export default new SocialConnectPage()