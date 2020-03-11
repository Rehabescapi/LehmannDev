/* eslint-disable no-undef */
describe(" initial Page loads", () => {
  [
    { url: "/", section: "About" },
    { url: "/about", section: "About" },
    { url: "/interests", section: "Interests" },
    { url: "/experience", section: "Experience" },
    { url: "/education", section: "Education" },
    { url: "/skills", section: "Skills" }
  ].forEach(page => {
    it("I can visit page loads " + page.url, () => {
      cy.visit(page.url);

      cy.get("h2").contains(page.section);
    });
  });

  it("Sidebar buttons work", () => {});

  it("Lower Level buttons work", () => {});
});
