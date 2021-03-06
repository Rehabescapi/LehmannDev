import React, { Component } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageTransitionWrapper } from "../variants";
import { IconTypes } from "./IconTypes.js";
import { Popup } from "semantic-ui-react";

const ULVert = styled.ul`
  list-style-type: none;
`;
const IconUL = styled.ul`
  list-style-type: none;
  margin: 10px;
  padding: 0;
`;

const IconLI = styled.li`
  display: inline;
  margin 5px;
  padding-left: 1em;
  &:hover {
    color: ${props => props.Hcolor};
  }
`;

class SkillsComponent extends Component {
  render() {
    return (
      <PageTransitionWrapper>
        <section
          className="resume-section  ui raised very padded text container border"
          id="skills"
        >
          <div className="my-auto">
            <h2 className="mb-5">Skills</h2>

            <h3 className="subheading mb-3">
              Programming Languages &amp; Tools
            </h3>
            <IconUL classname="dev-icons">
              {IconTypes.map(Icon => (
                <Popup
                  content={Icon.key}
                  key={Icon.key}
                  trigger={
                    <IconLI Hcolor={Icon.color}>
                      <FontAwesomeIcon icon={[Icon.type, Icon.key]} size="3x" />
                    </IconLI>
                  }
                />
              ))}
            </IconUL>

            <h3 className="">Workflow</h3>
            <ULVert>
              <li>
                <FontAwesomeIcon icon={["fas", "check"]} />
                Mobile-First, Responsive Design
              </li>
              <li>
                <FontAwesomeIcon icon={["fas", "check"]} />
                Cross Browser Testing &amp; Debugging
              </li>
              <li>
                <FontAwesomeIcon icon={["fas", "check"]} />
                Cross Functional Teams
              </li>
              <li>
                <FontAwesomeIcon icon={["fas", "check"]} />
                Agile Development &amp; Scrum
              </li>
            </ULVert>
          </div>
          <div className="">
            <h3> QA Analyst</h3>
            <ul className="">
              <li>
                <i className="fa-li fa fa-check" />
                Mobile-First, Responsive Design
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Cross Browser Testing &amp; Debugging
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Cross Functional Teams
              </li>
              <li>
                <i className="fa-li fa fa-check" />
                Agile Development &amp; Scrum
              </li>
            </ul>
          </div>
        </section>
      </PageTransitionWrapper>
    );
  }
}

//Can I export with WithPageTransition()
export default SkillsComponent;
