import React, { Component } from "react";
import Proptypes from "prop-types";
import InterestComponent from "../InterestComponent/InterestComponent";
import ContentComponent from "../contentComponent/ContentComponent";
import SkillsComponent from "../SkillsComponent/SkillsComponent";
import EducationComponent from "../EducationComponent/EducationComponent";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";

class MainContainer extends Component {
  render() {
    return (
      <div
        className="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column"
        id="Main Content"
      >
        <div className="ui main text segment">
          <div className="ui  aligned divided list">
            <div className="item">
              <ContentComponent />
            </div>
            <div className="item">
              <ExperienceComponent />
            </div>
            <div className="item">
              <EducationComponent />
            </div>
            <div className="item">
              <SkillsComponent />
            </div>
            <div className="item">
              <InterestComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainContainer;
