import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../header/headerComponent";
import InterestComponent from "../InterestComponent/InterestComponent";
import ContentComponent from "../contentComponent/ContentComponent";
import SkillsComponent from "../SkillsComponent/SkillsComponent";
import EducationComponent from "../EducationComponent/EducationComponent";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";
import { AnimatePresence } from "framer-motion";
const sections = ["about", "experience", "education", "skills", "interests"];

class MainContainer extends Component {
  render() {
    return (
      <div
        className="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column"
        id="Main Content"
      >
        <Header />
        <div className="ui main text segment">
          <AnimatePresence>
            <Switch
              location={this.props.location}
              key={this.props.location.className}
            >
              <Route exact path="/about" component={ContentComponent} />
              <Route path="/experience" component={ExperienceComponent} />
              <Route path="/education" component={EducationComponent} />
              <Route path="/interests" component={InterestComponent} />
              <Route path="/skills" component={SkillsComponent} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    );
  }
}
export default MainContainer;
