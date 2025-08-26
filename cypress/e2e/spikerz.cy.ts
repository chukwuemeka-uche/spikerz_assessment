import socialPage from "../support/pages/SocialConnectPage";

describe("Test Suite: Spikerz", () => {
    it("Verify connect to YouTube", () => {
        cy.authUser();
        cy.authUser("/social-connect/");

        socialPage.clickCard("Youtube")
            .clickSocialConnectButton()
            .verifyConfirmDetailsText("Confirm details")
            .verifyImgIsDisplayed()
            .verifyHandle("@dina_bakery_shop");
    });
});
