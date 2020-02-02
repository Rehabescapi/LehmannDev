import React, { Component } from "react";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PageTransitionWrapper } from "../variants";

class ContentComponent extends Component {
  render() {
    return (
      <PageTransitionWrapper>
        <section className="ui  very padded text container " id="about">
          <h1>
            <span className="text-primary"> Jason Lehmann</span>
          </h1>
          <div className="subheading">
            Chicago, IL 60640 · (269) 876-8901 · jason@lehmanndev.com
          </div>
          <p className="lead">
            Hi there, I am a junior full stack developer. Currently employed as
            a QA analyst at Aspiritech Chicago. I'm currently specializing in
            automation and employee to employee training teams.{" "}
          </p>
          <p>
            {" "}
            Off hours I'm learning ReactJS and some contract web development
            solving mostly wordpress and back-end dev-ops problems.
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
        </section>
      </PageTransitionWrapper>
    );
  }
}
export default ContentComponent;
