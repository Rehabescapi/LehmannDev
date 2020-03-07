import React, { Component } from "react";

import { PageTransitionWrapper } from "../variants";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import weallcode from "./img/weallcode.svg";
import codeplatoon from "./img/codeplatoon.png";

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

            <h2>Volunteering</h2>
            <h3>
              <Link to={"https://www.weallcode.org/team/#mentors"}>
                <Image
                  src={weallcode}
                  alt="we all code logo"
                  size="small"
                  float={"left"}
                />
              </Link>
              <div>{"---Mentor"}</div>
            </h3>
            <p>
              {" "}
              Local non Profit that teaches children ages 7-17 the basics of
              HTML, CSS, and JS. I attempt to participate on a monthly basis.
            </p>

            <h3>
              {" "}
              <Link
                to={"https://www.codeplatoon.org/juliet-platoon-update-blog/"}
              >
                <Image
                  src={codeplatoon}
                  verticalAlign="left"
                  alt="we all code logo"
                  size="small"
                />
              </Link>
              <div>{"---Juliet (Sept-Dec 2019) Teachers Assistant"}</div>
            </h3>

            <p>
              {" "}
              Assisted with Full stack fundamentals and coding interview
              questions.
            </p>

            <o></o>
            <h2>Side Projects</h2>
            <h3>
              <Link to={"https://reactreduxmovie.web.app"}>Movie App</Link>
            </h3>
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
