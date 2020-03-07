import React, { Component } from "react";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PageTransitionWrapper } from "../variants";
import { Container } from "semantic-ui-react";
class ContentComponent extends Component {
  render() {
    return (
      <PageTransitionWrapper>
        <section className="ui  very padded text container " id="about">
          <Container textAlign="center">
            {" "}
            <h1>
              <span className="text-primary center"> Jason Lehmann</span>
            </h1>
            <div className="subheading">Chicago, IL · jason@lehmanndev.com</div>
          </Container>
          <Container textAlign="left">
            <p className="lead">
              Hi there, I am a junior full stack developer. Currently employed
              as a QA Lead for the Chicago Aspiritech office. I manage two
              different clients that require exploratory and regression testing.
              Recently I've become the web Analyst for Trov's AU auto insurance
              client.
            </p>
            <p>
              {" "}
              Off hours I'm learning ReactJS and some contract web development
              solving mostly wordpress and basic back-end dev-ops problems.I
              volunteer for nonprofit called 'We all Code'.
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/jlehmanncs/">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a href="https://github.com/Rehabescapi">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a href="https://www.twitch.tv/rehabescape">
                <FontAwesomeIcon icon={["fab", "twitch"]} />
              </a>
            </div>
          </Container>
        </section>
      </PageTransitionWrapper>
    );
  }
}
export default ContentComponent;
