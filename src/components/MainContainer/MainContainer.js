import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "../header/headerComponent";
import InterestComponent from "../InterestComponent/InterestComponent";
import BottomNaveComponet from "../BottomNavComponent/BottomNavComponent";
import ContentComponent from "../contentComponent/ContentComponent";
import SkillsComponent from "../SkillsComponent/SkillsComponent";
import EducationComponent from "../EducationComponent/EducationComponent";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";
import { AnimatePresence } from "framer-motion";
import { Divider } from "semantic-ui-react";
//const sections = ["" , "about", "experience", "education", "skills", "interests"];

const sections = {
  main: { right: "about" },
  about: { left: "main", right: "experience" },
  experience: { left: "about", right: "education" },
  education: { left: "experience", right: "skills" },
  skills: { left: "education", right: "interests" },
  interests: { left: "skills" }
};
class MainContainer extends Component {
  render() {
    let links = sections[this.props.active];
    return (
      <div
        className="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column"
        id="Main Content"
      >
        <div className="ui main text segment">
          <AnimatePresence>
            <Switch
              location={this.props.location}
              key={this.props.location.className}
            >
              <Route path="/about" component={ContentComponent} />
              <Route path="/experience" component={ExperienceComponent} />
              <Route path="/education" component={EducationComponent} />
              <Route path="/interests" component={InterestComponent} />
              <Route path="/skills" component={SkillsComponent} />
              <Route component={AllComponents} />
            </Switch>
          </AnimatePresence>
        </div>
        <BottomNaveComponet
          onActiveChange={this.props.onActiveChange}
          left={links.left}
          right={links.right}
        />
      </div>
    );
  }
}
export default withRouter(MainContainer);

const AllComponents = () => (
  <div className="fullContent">
    <ContentComponent />
    <Divider section />
    <ExperienceComponent />
    <Divider section />
    <EducationComponent />
    <Divider section />
    <InterestComponent />
    <Divider section />
    <SkillsComponent />
  </div>
);
