import React, { Component } from "react";

import InterestComponent from "../InterestComponent/InterestComponent";
import ContentComponent from "../contentComponent/ContentComponent";
import SkillsComponent from "../SkillsComponent/SkillsComponent";
import EducationComponent from "../EducationComponent/EducationComponent";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";

const sections = ["about", "experience", "education", "skills", "interests"];

class MainContainer extends Component {
  render() {
    return (
      <div
        className="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column"
        id="Main Content"
      >
        <div className="ui main text segment">
          <ContentComponent />

          <ExperienceComponent />

          <EducationComponent />

          <SkillsComponent />

          <InterestComponent />
        </div>
      </div>
    );
  }
}
export default MainContainer;
