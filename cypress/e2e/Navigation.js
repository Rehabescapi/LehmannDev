/* eslint-disable no-undef */
describe(" initial Page loads", () => {
  [
    "/",
    "/about",
    "/interests",
    "/about",
    "/experience",
    "/education",
    "/skills"
  ].forEach(page => {
    it("I can visit page loads " + page, () => {
      cy.visit(page);
    });
  });
});
