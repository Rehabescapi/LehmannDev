import React, { Component } from "react";
import { Router, Location } from "@reach/router";
import posed, { PoseGroup } from "react-pose";
import InterestComponent from "../InterestComponent/InterestComponent";
import ContentComponent from "../contentComponent/ContentComponent";
import SkillsComponent from "../SkillsComponent/SkillsComponent";
import EducationComponent from "../EducationComponent/EducationComponent";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";

const sections = ["about", "experience", "education", "skills", "interests"];

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);
class MainContainer extends Component {
  render() {
    return (
      <div
        className="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column"
        id="Main Content"
      >
        <div className="ui main text segment">
          <PosedRouter>
            <ContentComponent path="/about" />

            <ExperienceComponent path="/experience" />

            <EducationComponent path="/education" />

            <SkillsComponent path="/skills" />

            <InterestComponent path="/interests" />
          </PosedRouter>
        </div>
      </div>
    );
  }
}
export default MainContainer;
