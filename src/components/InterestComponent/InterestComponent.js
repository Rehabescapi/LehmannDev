import React, { Component } from "react";

import { PageTransitionWrapper } from "../variants";
class InterestComponent extends Component {
  render() {
    return (
      <PageTransitionWrapper>
        <section
          className="ui raised very padded text container border"
          id="interests"
        >
          <div className="my-auto">
            <h2>Interests</h2>
            <p />
            <p />

            <h2>Side Projects</h2>
            <h3>Coder Dojo Chi</h3>
            <p>
              {" "}
              Local non Profit that teaches children ages 7-17 the basics of
              HTML, CSS, and JS. I make an attempt to particioate on a monthly
              basis.
            </p>
            <h3>Movie App</h3>
            <p>
              {" "}
              Movie Application where I took the inital look of Movie
              Application and refactored it into a React-Redux project.
            </p>
          </div>
        </section>
      </PageTransitionWrapper>
    );
  }
}
export default InterestComponent;
